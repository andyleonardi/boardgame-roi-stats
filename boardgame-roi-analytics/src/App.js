// Import packages & hooks
import { Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Collections from "./pages/Collections";
import Analytics from "./pages/Analytics";
import gamesArr from "./gameCollection";

// Import styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collections" element={<Collections allGames={gamesArr} />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
