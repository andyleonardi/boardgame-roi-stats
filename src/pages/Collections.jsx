import Header from "../components/Header";
import { Link } from "react-router-dom";

const Collections = (props) => {
  const allGames = props.allGames.map((e, index) => {
    return (
      <tr key={index}>
        <td id={index}>{e.name}</td>
        <td>{e.buydate}</td>
        <td>${e.buyprice.toFixed(2)}</td>
        <td>{e.selldate}</td>
        <td>{e.selldate !== "" && "$" + e.sellprice.toFixed(2)}</td>
        <td>{e.playcount}</td>
        <td>
          {e.playcount > 0 &&
            "$" + ((e.buyprice - e.sellprice) / e.playcount).toFixed(2)}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Header />
      <div className="collections">
        <div>
          <h2>Your Collection</h2>
        </div>
        <button onClick={props.handleSyncButton}>
          <Link to="/form">Sync Data</Link>
        </button>
        <table>
          <tr>
            <th>Name</th>
            <th>Purchase Date</th>
            <th>Damage</th>
            <th>Sell Date</th>
            <th>Heal</th>
            <th># plays</th>
            <th>Cost / Play</th>
          </tr>
          {allGames}
        </table>
      </div>
    </div>
  );
};

export default Collections;
