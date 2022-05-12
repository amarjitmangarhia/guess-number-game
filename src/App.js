import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="button-between">
          <button className="again-button">Again!</button>
          <p className="between">"Between 1 and 20"</p>
        </div>
        <div className="title">
          <h1 className="guess-h1">Guess My Number!</h1>
        </div>
        <div className="guess-number">
          <div className="border"></div>
          <div className="number">?</div>
        </div>
      </div>

      <div className="main">
        <div className="main-section">
          <div className="main-left">
            <input type="number" defaultValue="0" className="input" />
            <button className="main-button">Check!</button>
          </div>
          <div className="main-right">
            <div className="content">
              <div className="start-guessing-text">
                <p className="main-guess">Start Guessing...</p>
              </div>
              <div className="main-score">
                <div className="score">
                  <p>Score: 20</p>
                </div>
                <div className="high-score">
                  <p>Highscore: 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
