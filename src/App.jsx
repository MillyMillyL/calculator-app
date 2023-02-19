import { useReducer, useState } from "react";
import { Reducer } from "./Reducer";
import { formatNumber } from "./FormatNumber";
import { ACTIONS } from "./Actions";

function App() {
  const currentTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    currentTheme
      ? currentTheme
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark-blue-theme"
      : "light-gray-theme"
  );

  const handleThemeChange = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  const [{ currentValue, previousValue, operator }, dispatch] = useReducer(
    Reducer,
    {}
  );

  return (
    <div className={`App ${theme}`}>
      <div className="calc">
        <div className="header">
          <div className="title">calc</div>
          <div className="toggle">
            <div className="toggle-title"> THEME</div>
            <div className="toggle-inputs">
              <div className="labels">
                <span className="label">1</span>
                <span className="label">2</span>
                <span className="label">3</span>
              </div>
              <div className="radios">
                <input
                  id="1"
                  type="radio"
                  name="theme"
                  value="dark-blue-theme"
                  onChange={handleThemeChange}
                  checked={theme === "dark-blue-theme"}
                />
                <input
                  id="2"
                  type="radio"
                  name="theme"
                  value="light-gray-theme"
                  onChange={handleThemeChange}
                  checked={theme === "light-gray-theme"}
                />
                <input
                  id="3"
                  type="radio"
                  name="theme"
                  value="dark-violet-theme"
                  onChange={handleThemeChange}
                  checked={theme === "dark-violet-theme"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="display">
          <div className="prev">
            {formatNumber(previousValue)} {operator}
          </div>
          <div className="cur">{formatNumber(currentValue)}</div>
        </div>
        <div className="keyboard">
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "7" })}
          >
            7
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "8" })}
          >
            8
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "9" })}
          >
            9
          </button>
          <button
            className="key del"
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          >
            DEL
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "4" })}
          >
            4
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "5" })}
          >
            5
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "6" })}
          >
            6
          </button>
          <button
            className="key"
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "+" })
            }
          >
            +
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "1" })}
          >
            1
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "2" })}
          >
            2
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "3" })}
          >
            3
          </button>
          <button
            className="key"
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "-" })
            }
          >
            -
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "." })}
          >
            .
          </button>
          <button
            className="key"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "0" })}
          >
            0
          </button>
          <button
            className="key"
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "/" })
            }
          >
            /
          </button>
          <button
            className="key"
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "x" })
            }
          >
            x
          </button>
          <button
            className="key reset"
            onClick={() => dispatch({ type: ACTIONS.RESET })}
          >
            RESET
          </button>
          <button
            className="key equal"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
