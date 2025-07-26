import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  //紀錄計數
  const [count, setCount] = useState(0);
  //紀錄點擊按鈕
  const [click, setClick] = useState(0);
  //用戶名稱狀態
  const [userName, setUserName] = useState("");
  return (
    <div className="counter-container">
      <h1 className="counter-title">Simple Counter</h1>
      {/**用戶名稱 */}
      <div className="user-input-section">
        <label className="user-input-label" htmlFor="name">
          Your Name：
        </label>
        <input
          className="user-input-field"
          id="name"
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="your name"
        />
      </div>
      {/**用戶問候語 */}
      {userName && <div className="user-greeting">Hi~{userName}!</div>}

      {/**記數顯示 */}
      <div className="count-display-section">
        <div className="count-display">{count}</div>
        <p className="count-label">Total Count</p>
      </div>
      {/**控制按鈕 */}
      <div className="button-section">
        <button
          className="counter-button button-decrease"
          onClick={() => (setCount(count - 1), setClick(click + 1))}
        >
          -1
        </button>
        <button
          className="counter-button button-reset"
          onClick={() => (setCount(0), setClick(click + 1))}
        >
          reset
        </button>
        <button
          className="counter-button button-increase"
          onClick={() => (setCount(count + 1), setClick(click + 1))}
        >
          +1
        </button>
      </div>
      {/* 統計資訊 */}
      <div className="stats-section">
        <p className="stats-text">You've clicked buttons for {click} times</p>
      </div>
    </div>
  );
}

export default Counter;
