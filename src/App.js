// Import packages & hooks
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { xml2js } from "xml-js";

// Import components
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Collections from "./pages/Collections";
import Analytics from "./pages/Analytics";
import Forms from "./pages/Forms";
// import gamesArr from "./gameCollection";

import gamesArr from "./testAppData"; // TESTING SMALL SAMPLE (HARDCODED)
import testBggArr from "./testAPIData";

// Import styles
import "./App.css";

// BGG API Paths
const bggCollectionPath = "https://api.geekdo.com/xmlapi/collection/"; // for getting collections

// Function to extract relevant API data
const extractRelevantData = (obj) => {
  let ownStatus = "";

  if (obj.status._own === 1) {
    ownStatus = "Own";
  } else if (obj.status._prevowned === 1) {
    ownStatus = "Previously Owned";
  } else if (obj.status._preordered === 1) {
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
  const [bggUserId, setBggUserId] = useState("andyleonardi");
  // const [userBGGData, setUserBGGData] = useState([]);
  const [userBGGData, setUserBGGData] = useState(testBggArr); // TESTING SMALL SAMPLE SET (HARDCODED)
  const [userCollectionData, setUserCollectionData] = useState([]);
  const [requireInputs, setRequireInputs] = useState([]);
  const [noInputsRequired, setNoInputsRequired] = useState([]);
  /*
  // Try to mount API first, but for working version only pull API data when user submit form
  useEffect(() => {
    // Because I only want to pull games users buy, I need to pull 3 separate times
    // Once for Own, second for Previously Owned, third for Preordered
    // This is because BGG user collection data includes even games that you've never purchased,
    // but which you've logged as Played, or you've Commented on, etc
    // Since I only want actual purchases and user's own collection
    // I needed to only get these 3
    const collectionPathOwn = `${bggCollectionPath}${bggUserId}?own=1&excludesubtype=boardgameexpansion`;
    const collectionPathPrevOwn = `${bggCollectionPath}${bggUserId}?prevowned=1&excludesubtype=boardgameexpansion`;
    const collectionPathPreOrder = `${bggCollectionPath}${bggUserId}?preordered=1&excludesubtype=boardgameexpansion`;

    console.log(collectionPathOwn);

    const fetchBGGCollectionData = async () => {
      const responseOwn = await fetch(collectionPathOwn);
      const responsePrevOwn = await fetch(collectionPathPrevOwn);
      const responsePreOrder = await fetch(collectionPathPreOrder);

      const xmlDataOwn = await responseOwn.text();
      const xmlDataPrevOwn = await responsePrevOwn.text();
      const xmlDataPreOrder = await responsePreOrder.text();

      const dataOwn = xml2js(xmlDataOwn, { compact: true, spaces: 4 }).items;
      const dataPrevOwn = xml2js(xmlDataPrevOwn, { compact: true, spaces: 4 }).items.item;
      const dataPreOrder = xml2js(xmlDataPreOrder, { compact: true, spaces: 4 }).items.item;
      console.log("Currently owned: ", dataOwn);
      // console.log("Preordered: ", dataPreOrder);

      // Now that we have the collection data from API, we want to get just the relevant fields
      // We want Name, Status and Numplay
      const reducedOwn = dataOwn.map(
        ({ name, numplays, status, _attributes }) =>
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
      const reducedAll = reducedOwn.concat(reducedPrevOwn).concat(reducedPreOrder);
      console.log(reducedAll);

      // setUserBGGData(reducedAll);

      // dataOwn.items.item.forEach((e)=>{console.log(`Name: ${e.name._text}, # plays: ${e.numplays._text}. GameID = ${e._attributes.objectid}`)});
      // console.log(dataPreOrder);
    };

    fetchBGGCollectionData();
  }, [bggUserId]);
  */

  // console.log(userBGGData);

  const handleSyncButton = () => {
    console.log("Sync button pressed");
    // test arrays gamesArr & testBggArr
    console.log("Test app saved data: ", gamesArr);
    console.log("Test API data: ", testBggArr);

    // This function will need to do the following:
    // First it will need to compare boardgame names in both arrays, then:
    // 1. For any records that is in userBGGData that is not in app data,
    //    add them to app data (this will only take the following obj keys:
    //    name, status, playcount)
    //    NOTE: when we compare, we are only interested in getting records in
    //          userBGGData, and not the other way because theoretically,
    //          app data should have been synced to the last userBGGData
    let newRecords = testBggArr.filter(
      ({ name: record1 }) =>
        !gamesArr.some(({ name: record2 }) => record2 === record1)
    ).map(({gameID, ...item}) => item);
    newRecords.forEach((element) => {
      element.buydate = null;
      element.buyprice = null;
      element.selldate = null;
      element.sellprice = null;
    });
    // console.log(newRecords);

    // 2. [OLD] For all matching records (name), update both status & playcount
    //    [OLD] in app's data with the data from userBGGData
    // 2. Get all matching name, but different status, i.e. we want to get 
    //    games that were sold between syncs (bgg status = prevowned & app status = own)
    let updateRecords = gamesArr.filter(({ name: record1, status: stat1 }) =>
      testBggArr.some(({ name: record2, status: stat2 }) => record2 === record1 & stat1 !== stat2 & stat2 === "Previously Owned")
    );
    updateRecords.forEach((element) => {
      element.status = "Previously Owned";
    })
    // console.log(updateRecords);

    let inputRequiredRecords = newRecords.concat(updateRecords);
    inputRequiredRecords.forEach((element, index) => {
      element.id = index;
    })
    // console.log(inputRequiredRecords);

    // The above 2 arrays will contain everything that has changed between syncs
    // 1) new games, 2) sold games
    // We will update playcount at a later stage

    // Then open / Link to Forms component where it takes the combined array
    // and get user to input forms
    
    // console.log(inputRequiredRecords);
    setRequireInputs(inputRequiredRecords);

    // Set state of another list where no inputs are required
    let staticRecords = gamesArr.filter(
      ({ name: record1 }) =>
        !inputRequiredRecords.some(({ name: record2 }) => record2 === record1)
    )
    // console.log(staticRecords);

    setNoInputsRequired(staticRecords);

    // This will update the values in our app data array
    // Then, run through new data array.
    // If there is any missing purchase data, add it to a new array
    // If there is any missing sell data AND status = prevowned, add it to a new array

    // Finally, Link to Forms component where we will have these new records
    // and allow user to input values to them
  };

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
    setUserCollectionData(newData);
    // console.log("updated data: ", userCollectionData);
  };

  return (
    <div className="App">
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/collections"
            element={
              <Collections
                allGames={gamesArr}
                handleSyncButton={handleSyncButton}
              />
            }
          />
          <Route path="/form" element={<Forms objArr={requireInputs} updateDataFromInputs={updateDataFromInputs} />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
