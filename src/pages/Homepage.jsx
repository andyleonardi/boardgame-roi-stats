import Header from "../components/Header";

const Homepage = (props) => {
  const roiMeter = (cost) => {
    if (cost === null) {
      return <>Please upload your collection</>;
    }
    if (cost <= 0) {
      return <>!!! IMPOSSIBRU?!? !!!</>;
    }
    if (cost <= 5) {
      return <>Skip a cup of joe</>;
    }
    if (cost <= 10) {
      return (
        <>
          Wow, it <b>IS</b> cheaper than going to the cinema!
        </>
      );
    }
    if (cost <= 15) {
      return <>Fine! It's either this or the cinema</>;
    }
    if (cost <= 20) {
      return <>One less meal at a cafe!</>;
    }
    if (cost <= 30) {
      return <>One less meal at a restaurant!</>;
    }
    if (cost <= 50) {
      return <>Still cheaper than a video game</>;
    }
    if (cost <= 80) {
      return <>Play a game, or play at Universal Studios?</>;
    }
    if (cost <= 100) {
      return <>Houston, we have a problem</>;
    }
  };

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
        <div className="roi-summary">
          {roiMeter(props.dmgplay)}
        </div>
        <table>
          <tr>
            <td>$100</td>
            <td>Houston, we have a problem</td>
          </tr>
          <tr>
            <td>$80</td>
            <td>Play a game, or play at Universal Studios?</td>
          </tr>
          <tr>
            <td>$50</td>
            <td>Still cheaper than a video game</td>
          </tr>
          <tr>
            <td>$30</td>
            <td>One less meal at a restaurant!</td>
          </tr>
          <tr>
            <td>$20</td>
            <td>One less meal at a cafe!</td>
          </tr>
          <tr>
            <td>$15</td>
            <td>Fine! It's either this or the cinema</td>
          </tr>
          <tr>
            <td>$10</td>
            <td>
              Wow, it <b>IS</b> cheaper than going to the cinema!
            </td>
          </tr>
          <tr>
            <td>$5</td>
            <td>Skip a cup of joe</td>
          </tr>
          <tr>
            <td>$0</td>
            <td>!!! IMPOSSIBRU?!? !!!</td>
          </tr>
        </table>
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
