import Header from "../components/Header";
import { useRef } from "react";

const Collections = (props) => {
  const userId = useRef(null);

  const allGames = props.allGames.map((e, index) => {
    return (
      <tr key={index}>
        <td id={index}>{e.name}</td>
        <td>{e.buydate}</td>
        <td>${e.buyprice.toFixed(2)}</td>
        <td>{e.selldate}</td>
        <td>{e.selldate !== null && "$" + e.sellprice.toFixed(2)}</td>
        <td>{e.playcount}</td>
        <td>
          {e.playcount > 0 &&
            "$" + ((e.buyprice - e.sellprice) / e.playcount).toFixed(2)}
        </td>
      </tr>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSyncButton(userId.current.value);
  };

  return (
    <div>
      <Header />
      <div className="collections">
        <div>
          <h2>Your Collection</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="bgg-userid-form"
            placeholder="your BGG user id"
            ref={userId}
          />
          <button type="submit">
            Sync Data
          </button>
        </form>
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
