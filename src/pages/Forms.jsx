import { useState } from "react";

const Forms = (props) => {
  const [requiredInputs, setRequiredInputs] = useState(props.objArr);
  
  const handleChange = (event) => {
    const updateState = (key, id, value) => {
      const newState = requiredInputs.map((obj, index, key, id, value) => {
        // if name & id matches, update value
        if (index === id) {
          return {...obj, key: value};
        }
        // otherwise return the object as is
        return obj;
      });
  
      setRequiredInputs(newState);
      console.log(requiredInputs);
    };
    
    console.log(event.target.name, event.target.id, event.target.value);
    // setRequiredInputs((event.target.name, event.target.id, event.target.value) => {
    updateState(event.target.name, event.target.id, event.target.value);
    // })

    // [Stopped here] I think somehow the above might work. Trying to get each
    // form change to update the state by changing value of the respective object property

  }
  
  const allRequiredInputs = requiredInputs.map((e, index) => {
    return (
      <tr key={index}>
        <td id={index}>{e.name}</td>
        <td>{e.buydate}{e.buydate === null && <input name="buydate" id ={index} type="text" value={e.buydate} onChange={handleChange} />}</td>
        <td>
          {e.buydate !== null && "$" + e.buyprice.toFixed(2)}
          {e.buyprice === null && <input name="buyprice" id ={index} type="text" value={e.buyprice} onChange={handleChange} />}  
        </td>
        <td>{e.selldate}{e.selldate === null && <input name="selldate" id ={index} type="text" value={e.selldate} onChange={handleChange} />}</td>
        <td>
          {e.selldate !== null && "$" + e.sellprice.toFixed(2)}
          {e.sellprice === null && <input name="sellprice" id ={index} type="text" value={e.sellprice} onChange={handleChange} />}  
        </td>
      </tr>
    );
  });

  return (
    <div className="formtable">
      <div>
        <h2>Please input damage & heals here</h2>
      </div>
      <form>
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
  );
};

export default Forms;
