import Header from "../components/Header";
import cardFunctions from "../functions/cardFunctions";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import monthlyInAndOut from "../functions/dataFunctions";
import { useState } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const Analytics = (props) => {
  const [barChartData, setBarChartData] = useState({
    labels: monthlyInAndOut(props.allGames).map((data) => data.monthClean),
    datasets: [
      {
        label: "Buy",
        data: monthlyInAndOut(props.allGames).map((data) => data.numbuy),
        backgroundColor: "rgba(0, 0, 255, 1)",
      },
      {
        label: "Sell",
        data: monthlyInAndOut(props.allGames).map((data) => -1*data.numsell),
        backgroundColor: "rgba(255, 0, 0, 1)",
      },
    ],
  });

  const [lineChartData, setLineChartData] = useState({
    labels: monthlyInAndOut(props.allGames).map((data) => data.monthClean),
    datasets: [
      {
        label: "Net Damage",
        data: monthlyInAndOut(props.allGames).map((data) => data.netDmg),
        borderColor: "rgba(0, 0, 255, 1)",
      },
    ],
  });

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
        <BarChart dataObj={barChartData}/>
        <LineChart dataObj={lineChartData}/>
      </div>
    </div>
  );
};

export default Analytics;
