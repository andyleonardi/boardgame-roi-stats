import Header from "../components/Header";
import roiMeter from "../functions/roiFunctions";
import cardFunctions from "../functions/cardFunctions";


const Homepage = (props) => {
  const levelMessage = roiMeter(cardFunctions(props.allGames, "dmgPerPlay"));
  
  return (
    <div>
      <Header />
      <div>
        <h2>Is your game collection out of control?</h2>
        <h3>Are you buying more than you're playing?</h3>
        <h4>Are you games decorations rather than entertainment?</h4>
        <p>Fear not!! We will determine if this precious hobby of yours is:</p>
      </div>
      <div className="fun-box">
        <div className="roi-summary">{levelMessage}</div>
      </div>
    </div>
  );
};

// IMPOSSIBRU!
// Skip a cup of joe
// It IS cheaper than going to the cinema
// Fine, it's either this or the cinema
// One less meal in a cafe!
// One less meal in a restaurant!
// Still cheaper than a video game
// Play a board game, or play at Universal Studios?
// Houston, we have a problem

export default Homepage;
