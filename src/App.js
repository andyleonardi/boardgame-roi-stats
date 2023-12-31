// Import packages & hooks
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { xml2js } from "xml-js";

// Import components
// import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Collections from "./pages/Collections";
import Analytics from "./pages/Analytics";
import Forms from "./Forms/Forms";
import FormDone from "./Forms/FormDone";
import gamesArr from "./gameCollection";

// import gamesArr from "./testAppData"; // TESTING SMALL SAMPLE (HARDCODED)
// import testBggArr from "./testAPIData";
// import monthlyInAndOut from "./functions/dataFunctions";

// Import styles
import "./App.css";

// BGG API Paths
const bggCollectionPath = "https://api.geekdo.com/xmlapi/collection/"; // for getting collections

// Function to convert one piece of API data
const extractRelevantData = (obj) => {
  let ownStatus = "";

  if (obj.status._attributes.own === "1") {
    ownStatus = "Own";
  } else if (obj.status._attributes.prevowned === "1") {
    ownStatus = "Previously Owned";
  } else if (obj.status._attributes.preordered === "1") {
    ownStatus = "Pre-ordered";
  }

  return {
    name: obj.name._text,
    playcount: obj.numplays._text,
    gameID: obj._attributes.objectid,
    status: ownStatus,
  };
};

function App() {
  const [userBGGData, setUserBGGData] = useState([]);
  const [userCollectionData, setUserCollectionData] = useState(gamesArr);
  const [requireInputs, setRequireInputs] = useState([]);
  const [noInputsRequired, setNoInputsRequired] = useState([]);

  const navigate = useNavigate();

  // Because I only want to pull purchases, I need to pull 3 separate times
  // Once for Own, second for Previously Owned, third for Preordered
  // This is because BGG user collection data includes even games that
  // you've played (maybe someone's copy) but never purchased,
  
  // Function to pull data from API
  const fetchBGGCollectionData = async (userid) => {
    // Define API path
    const collectionPathOwn = `${bggCollectionPath}${userid}?own=1&excludesubtype=boardgameexpansion`;
    const collectionPathPrevOwn = `${bggCollectionPath}${userid}?prevowned=1&excludesubtype=boardgameexpansion`;
    const collectionPathPreOrder = `${bggCollectionPath}${userid}?preordered=1&excludesubtype=boardgameexpansion`;
    console.log("One of the API paths: ", collectionPathOwn);

    // Fetch data from API path
    const responseOwn = await fetch(collectionPathOwn);
    const responsePrevOwn = await fetch(collectionPathPrevOwn);
    const responsePreOrder = await fetch(collectionPathPreOrder);

    // Convert XML API to text
    const xmlDataOwn = await responseOwn.text();
    const xmlDataPrevOwn = await responsePrevOwn.text();
    const xmlDataPreOrder = await responsePreOrder.text();

    // Convert to JSON for readability
    const dataOwn = xml2js(xmlDataOwn, { compact: true, spaces: 4 }).items.item;
    const dataPrevOwn = xml2js(xmlDataPrevOwn, { compact: true, spaces: 4 })
      .items.item;
    const dataPreOrder = xml2js(xmlDataPreOrder, { compact: true, spaces: 4 })
      .items.item;

    // Now that we have the collection data from API,
    // we want to get just the relevant fields
    // We want Name, Status and Numplay
    const reducedOwn = dataOwn.map(({ name, numplays, status, _attributes }) =>
      extractRelevantData({ name, numplays, status, _attributes })
    );
    const reducedPrevOwn = dataPrevOwn.map(
      ({ name, numplays, status, _attributes }) =>
        extractRelevantData({ name, numplays, status, _attributes })
    );
    const reducedPreOrder = dataPreOrder.map(
      ({ name, numplays, status, _attributes }) =>
        extractRelevantData({ name, numplays, status, _attributes })
    );
    const reducedAll = reducedOwn
      .concat(reducedPrevOwn)
      .concat(reducedPreOrder);

    return reducedAll;
  };

  // Function to compare user collection and API data
  const comparisonFunction = (appData, bggData) => {
    // 1. For New games, anything in BGGData that is not in collectionData
    //    NOTE: when we compare, BGGData will always be the most up-to-date
    //          status (Own, PrevOwn, Preorder), so anything in BGGData that
    //          is not in collectionData will be New games
    //          which we need to add to collectionData and which we need
    //          inputs for (purchase date, purchase price)
    // The following lines will filter out entries in BGGData that are not
    // present in collectionData
    let newRecords = bggData
      .filter(
        ({ name: record1 }) =>
          !appData.some(({ name: record2 }) => record2 === record1)
      )
      .map(({ gameID, ...item }) => item);
    newRecords.forEach((element) => {
      element.buydate = null;
      element.buyprice = null;
      element.selldate = null;
      element.sellprice = null;
    });

    // 2. For Sold games, any games that are in both collectionData & BGGData,
    //    but with Previously Owned status in BGGData
    // The following lines will filter out entries in collectionData that are
    // also in BGGData, but where their status is different
    let updateRecords = appData.filter(({ name: record1, status: stat1 }) =>
      bggData.some(
        ({ name: record2, status: stat2 }) =>
          (record2 === record1) &
          (stat1 !== stat2) &
          (stat2 === "Previously Owned")
      )
    );
    updateRecords.forEach((element) => {
      element.status = "Previously Owned";
    });

    // Combine both New and Sold lists.
    // This will be the list which will be passed as props to Forms
    // This is the list which user needs to input either purchase date & price
    // or sell date & price
    let inputRequiredRecords = newRecords.concat(updateRecords);
    inputRequiredRecords.forEach((element, index) => {
      element.id = index;
    });

    // The above 2 arrays will contain everything that has changed between syncs
    // 1) new games, 2) sold games
    // We will update playcount at a later stage

    // Update state of requireInputs which will be passed to Forms
    setRequireInputs(inputRequiredRecords);

    // While we send a subset to Forms to collect user inputs, we also
    // prepare the rest of the data where no inputs are required
    let staticRecords = appData.filter(
      ({ name: record1 }) =>
        !inputRequiredRecords.some(({ name: record2 }) => record2 === record1)
    );
    setNoInputsRequired(staticRecords);

    // Once all the processes are completed, we insert navigate hook
    // which will open Forms component
    navigate("/form");

    // For showcase purpose, so I can input values when demo-ing
    console.log("Input the following: 2023-07-02, 2023-04-24, 75.94, 43.12, 60.69. And then: 2023-03-08, 2023-03-30, 2023-06-24, 2023-05-10, 2023-05-10, 70, 35, 0, 55, 0");
  };

  // This handleSyncButton function will need to do the following:
  // First, fetch API data
  // then compare collectionData with BGGData,
  // Refactored the comparison logic to a separate function
  const handleSyncButton = (userid) => {
    console.log("Sync button pressed");
    console.log("BGG User ID: ", userid);

    // Fetch API data based on form-inputted BGG user id, but
    // wait for API data from fetch function
    fetchBGGCollectionData(userid)
      .then((apiData) => {
        console.log("Cleaned data fetched from BGG API: ", apiData);
        setUserBGGData(apiData);
        comparisonFunction(userCollectionData, apiData);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  // Function to join back with BGG data on playcount & gameID
  const createUpdatedCollection = (newDataFromCompletedForm, bggData) => {
    let joinedData = newDataFromCompletedForm.map(
      ({ playcount, ...newData }) => ({
        ...bggData.find((bgg) => bgg.name === newData.name && bgg),
        ...newData,
      })
    );
    return joinedData;
  };

  // Taking both lists (one static unchanged data, one form-changed data)
  // and join back with BGG data for play counts
  const updateDataFromInputs = (updatedData) => {   
    let newData = noInputsRequired.concat(updatedData);
    newData.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setUserCollectionData(createUpdatedCollection(newData, userBGGData));
  };

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage allGames={userCollectionData} />} />
          <Route
            path="/collections"
            element={
              <Collections
                allGames={userCollectionData}
                handleSyncButton={handleSyncButton}
              />
            }
          />
          <Route
            path="/form"
            element={
              <Forms
                objArr={requireInputs}
                updateDataFromInputs={updateDataFromInputs}
              />
            }
          />
          <Route path="/formdone" element={<FormDone />}/>
          <Route
            path="/analytics"
            element={
              <Analytics
                allGames={userCollectionData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
