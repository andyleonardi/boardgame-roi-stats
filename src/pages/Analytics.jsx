import Header from "../components/Header";

const Analytics = (props) => {
  const cardFunctions = (arrayObj, whatFunction) => {
    let numGames = arrayObj.length;
    let totalDamage = arrayObj.reduce(
      (damage, element) => damage + element.buyprice,
      0
    );
    let totalHeal = arrayObj.reduce(
      (damage, element) => damage + element.sellprice,
      0
    );
    let netDamage = totalDamage - totalHeal;
    let totalPlays = arrayObj.reduce(
      (damage, element) => damage + element.playcount,
      0
    );

    // For month calculation
    let initialPurchaseDate = arrayObj[0].buydate;
    let maxBuyDate = arrayObj.reduce(
      (maxDate, element) =>
        maxDate > element.buydate ? maxDate : element.buydate,
      initialPurchaseDate
    );
    let minBuyDate = arrayObj.reduce(
      (minDate, element) =>
        minDate < element.buydate ? minDate : element.buydate,
      initialPurchaseDate
    );
    console.log("min date ", minBuyDate, " max date ", maxBuyDate);

    let getMaxMth = new Date(maxBuyDate).getMonth();
    let getMinMth = new Date(minBuyDate).getMonth();
    let getMaxYear = new Date(maxBuyDate).getFullYear();
    let getMinYear = new Date(minBuyDate).getFullYear();
    console.log(getMaxMth, getMaxYear, getMinMth, getMinYear);

    let mthLength = getMaxMth - getMinMth + 12 * (getMaxYear - getMinYear);

    if (whatFunction === "totalGamesOwned") {
      return numGames;
    } else if (whatFunction === "dmgPerGame") {
      return numGames > 0 ? netDamage / numGames : Infinity;
    } else if (whatFunction === "dmgPerPlay") {
      return totalPlays > 0 ? netDamage / totalPlays : Infinity;
    } else if (whatFunction === "dmgPerMonth") {
      return mthLength > 0 ? netDamage / mthLength : Infinity;
    }
  };

  props.populateHomePage(cardFunctions(props.allGames, "dmgPerPlay"));

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
      <div className="analytics-charts">
      </div>
    </div>
  );
};

export default Analytics;
