import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forms = (props) => {
  const [requiredInputs, setRequiredInputs] = useState(props.objArr);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const updateState = () => {
      const newState = requiredInputs.map((obj) => {
        // if name & id matches, update value
        if (obj.id === Number(event.target.id)) {
          if (
            (event.target.name === "buyprice") ||
            (event.target.name === "sellprice")
          ) {
            return {
              ...obj,
              [event.target.name]: Number(
                event.target.value.replace(/[A-Za-z]/g, "")
              ),
            };
          } else {
            return { ...obj, [event.target.name]: event.target.value };
          }
        }
        // otherwise return the object as is
        return obj;
      });

      setRequiredInputs(newState);
      // console.log(requiredInputs);
    };

    // console.log(event.target.name, event.target.id, event.target.value);
    updateState();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(requiredInputs);
    props.updateDataFromInputs(requiredInputs);
    navigate("/formdone");
  };

  const allRequiredInputs = props.objArr.map((e, index) => {
    return (
      <tr key={index}>
        <td id={index}>{e.name}</td>
        <td>
          {e.buydate}
          {e.buydate === null && (
            <input
              name="buydate"
              id={index}
              type="text"
              value={e.buydate}
              onChange={handleChange}
            />
          )}
        </td>
        <td>
          {e.buydate !== null && "$" + e.buyprice.toFixed(2)}
          {e.buyprice === null && (
            <input
              name="buyprice"
              id={index}
              type="text"
              value={e.buyprice}
              onChange={handleChange}
            />
          )}
        </td>
        <td>
          {e.selldate}
          {(e.selldate === null) & (e.status === "Previously Owned") ? (
            <input
              name="selldate"
              id={index}
              type="text"
              value={e.selldate}
              onChange={handleChange}
            />
          ) : null}
        </td>
        <td>
          {e.selldate !== null && "$" + e.sellprice.toFixed(2)}
          {(e.sellprice === null) & (e.status === "Previously Owned") ? (
            <input
              name="sellprice"
              id={index}
              type="text"
              value={e.sellprice}
              onChange={handleChange}
            />
          ) : null}
        </td>
      </tr>
    );
  });

  return (
    <div className="form-container">
      <div className="formtable">
        <div>
          <h2>Please input damage & heals here</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            Submit
          </button>
          <table>
            <tr>
              <th>Name</th>
              <th>Purchase Date</th>
              <th>Damage</th>
              <th>Sell Date</th>
              <th>Heal</th>
            </tr>
            {allRequiredInputs}
          </table>
        </form>
      </div>
    </div>
  );
};

export default Forms;
