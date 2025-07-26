import React, { useState } from "react";
import "./ConditionRendering.css";
function ConditionRendering() {
  //狀態管理
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [age, setAge] = useState(18);
  const [weather, setWeather] = useState("cloudy");
  const [showSecret, setShowSecret] = useState(false);
  const [score, setScore] = useState(80);
  return (
    <div className="conditional-container">
      <h1>🎯 Condition Rendering</h1>
      {/* 1. 三元運算符範例 */}
      <div className="card-section">
        <h3>Login Status</h3>
        <div className="login-status">
          {isLoggedIn ? (
            <p className="login-message success">
              ✅ welcome, you've logged in.
            </p>
          ) : (
            <p className="login-message error">❌ Please login first.</p>
          )}
        </div>

        {/* 條件渲染：登入狀態 */}
        <button
          className={`login-button ${isLoggedIn ? "logout" : "login"}`}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "logout" : "login"}
        </button>
      </div>

      <div className="card-section">
        <h3>🎂 Age Check</h3>
        <div className="age-input-group">
          <label>age：</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="age-input"
          />
          {age < 18 && <p className="age-message minor">👶 You are baby.</p>}
          {age >= 18 && age < 65 && (
            <p className="age-message adult">🎉 You are an adult!!</p>
          )}
        </div>
        {age >= 65 && (
          <p className="age-message senior"> 👴 You are elderly.</p>
        )}
      </div>
      <div className="card-section">
        <h3>🌤️ Weather Suggestion</h3>
        <div className="weather-input-group">
          <label>Choose Weather：</label>
          <select
            className="weather-select"
            onChange={(e) => setWeather(e.target.value)}
            value={weather}
          >
            <option value="sunny">☀️ sunny</option>
            <option value="rainy">🌧️ rainy</option>
            <option value="cloudy">☁️ cloudy</option>
            <option value="snowy">❄️ snowy</option>
          </select>
          <div>
            {weather === "sunny" ? (
              <p className="weather-advice sunny">Wear sunglasses</p>
            ) : weather === "rainy" ? (
              <p className="weather-advice rainy">Bring umbrella~</p>
            ) : weather === "cloudy" ? (
              <p className="weather-advice cloudy">🧥 Wear a jacket!</p>
            ) : (
              <p className="weather-advice snowy">🧣 Too cold!!wear a scarf.</p>
            )}
          </div>
        </div>
      </div>
      <div className="card-section">
        <h3>🤫 Secret Info</h3>
        <div>
          <button
            className="secret-button"
            onClick={() => setShowSecret(!showSecret)}
          >
            {showSecret ? "Show" : "Hide"}
          </button>
          {showSecret && (
            <div className="secret-content">🎉 You know my secret!</div>
          )}
        </div>
      </div>
      <div className="card-section">
        <h3>📊 Score Assessment</h3>
        <div className="score-input-group">
          <label>Score：</label>
          <input
            type="number"
            onChange={(e) => {
              setScore(Number(e.target.value));
            }}
            value={score}
            className="score-input"
          />
          <div>
            {score >= 90 ? (
              <p className="grade-display grade-a">🏆 Excellent!you got A</p>
            ) : score >= 80 ? (
              <p className="grade-display grade-b">👍 Good！you got A</p>
            ) : score >= 70 ? (
              <p className="grade-display grade-c">📈 OK！you got C</p>
            ) : score >= 60 ? (
              <p className="grade-display grade-d">⚠️ ehhh！D...</p>
            ) : (
              <p className="grade-display grade-f">
                ❌ No...！Go home to study
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConditionRendering;
