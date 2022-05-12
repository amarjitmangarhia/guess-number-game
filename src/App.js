import React, { useRef, useState } from "react";

import "./App.css";

let randomNumber = Math.trunc(Math.random() * 21);

function App() {
  const input = useRef();

  const [guessNumber, setGuessNumber] = useState("?");
  const [startGuessing, setStartGuessing] = useState("Start Guessing...");

  const onClickHandler = () => {
    let inputValue = input.current.value;
    let convertToInt = parseInt(inputValue);

    if (randomNumber === convertToInt) {
      console.log("matched");
      setGuessNumber(randomNumber);
      setStartGuessing("Matched!");
    } else if (randomNumber < convertToInt) {
      setStartGuessing("Too High!");
      console.log(randomNumber);
    } else if (randomNumber > convertToInt) {
      setStartGuessing("Too Low!");
      console.log(randomNumber);
    }
  };

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
          <div className="number">{guessNumber}</div>
        </div>
      </div>

      <div className="main">
        <div className="main-section">
          <div className="main-left">
            <input
              ref={input}
              type="number"
              defaultValue="0"
              className="input"
            />
            <button onClick={onClickHandler} className="main-button">
              Check!
            </button>
          </div>
          <div className="main-right">
            <div className="content">
              <div className="start-guessing-text">
                <p className="main-guess">{startGuessing}</p>
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
