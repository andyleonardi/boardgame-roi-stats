import Header from "../components/Header";
import cardFunctions from "../functions/cardFunctions";

const Analytics = (props) => {
  return (
    <div>
      <Header />
      <div className="analytics-container">
        <div className="analytics-cards">
          <div className="cards" id="all-games-owned">
            <h4>Total Games Owned</h4>
            <p>{cardFunctions(props.allGames, "totalGamesOwned").toFixed(2)}</p>
          </div>
          <div className="cards" id="dmg-per-game">
            <h4>Damage / Game</h4>
            <p>${cardFunctions(props.allGames, "dmgPerGame").toFixed(2)}</p>
          </div>
          <div className="cards" id="dmg-per-mth">
            <h4>Monthly Damage</h4>
            <p>${cardFunctions(props.allGames, "dmgPerMonth").toFixed(2)}</p>
          </div>
          <div className="cards" id="dmg-per-play">
            <h4>Damage / Play</h4>
            <p>${cardFunctions(props.allGames, "dmgPerPlay").toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="analytics-charts"></div>
    </div>
  );
};

export default Analytics;
