// Import packages & hooks
import { Routes, Route } from "react-router-dom";
import { useSate, useEffect, useState } from "react";
import { xml2js } from "xml-js";

// Import components
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Collections from "./pages/Collections";
import Analytics from "./pages/Analytics";
import gamesArr from "./gameCollection";

// Import styles
import "./App.css";

// BGG API Paths
const bggCollectionPath = "https://api.geekdo.com/xmlapi/collection/"; // for getting collections

function App() {
  const [bggUserId, setBggUserId] = useState("andyleonardi");
  const [userBGGData, setUserBGGData] = useState([]);

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

    const fetchBGGCollectionData = async () => {
      const responseOwn = await fetch(collectionPathOwn);
      const responsePrevOwn = await fetch(collectionPathPrevOwn);
      const responsePreOrder = await fetch(collectionPathPreOrder);

      const xmlDataOwn = await responseOwn.text();
      const xmlDataPrevOwn = await responsePrevOwn.text();
      const xmlDataPreOrder = await responsePreOrder.text();

      const dataOwn = xml2js(xmlDataOwn, { compact: true, spaces: 4 }).items.item;
      const dataPrevOwn = xml2js(xmlDataPrevOwn, { compact: true, spaces: 4 }).items.item;
      const dataPreOrder = xml2js(xmlDataPreOrder, { compact: true, spaces: 4 }).items.item;
      // console.log("Currently owned: ", dataOwn);
      // console.log("Preordered: ", dataPreOrder);
      
      // Now that we have the collection data from API, we want to get just the relevant fields
      // We want Name, Status and Numplay

      const reducedOwn = dataOwn.map(({name, numplay, _attributes}) => ({name, numplay, _attributes}));
      const reducedPrevOwn = dataPrevOwn.map(({name, numplay, _attributes}) => ({name, numplay, _attributes}));
      const reducedPreOrder = dataPreOrder.map(({name, numplay, _attributes}) => ({name, numplay, _attributes}));
      const reducedAll = reducedOwn.concat(reducedPrevOwn).concat(reducedPreOrder);
      // console.log(reducedAll);

      // Final thing to do is to set state of userBGGData
      // Ideally we want only single simple keys, i.e. {name: xxx, playcount: yz, gameID: 123123} 

      
      // dataOwn.items.item.forEach((e)=>{console.log(`Name: ${e.name._text}, # plays: ${e.numplays._text}. GameID = ${e._attributes.objectid}`)});
      // console.log(dataPreOrder);
    };

    fetchBGGCollectionData();

  }, [bggUserId]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/collections"
            element={<Collections allGames={gamesArr} />}
          />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
