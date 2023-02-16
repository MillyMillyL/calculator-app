import { useState } from "react";

function App() {
  const currentTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    currentTheme ? currentTheme : "dark-blue-theme"
  );

  const handleThemeChange = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

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
        <div className="display"></div>
        <div className="keyboard">
          <button className="key">7</button>
          <button className="key">8</button>
          <button className="key">9</button>
          <button className="key del">DEL</button>
          <button className="key">4</button>
          <button className="key">5</button>
          <button className="key">6</button>
          <button className="key">+</button>
          <button className="key">1</button>
          <button className="key">2</button>
          <button className="key">3</button>
          <button className="key">-</button>
          <button className="key">.</button>
          <button className="key">0</button>
          <button className="key">/</button>
          <button className="key">x</button>
          <button className="key reset">RESET</button>
          <button className="key equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
