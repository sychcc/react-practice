import React, { useState } from "react";
import "./EventHandler.css";
function EventHandler() {
  //狀態管理
  const [message, setMessage] = useState("Press the buttons");
  const [clickCount, setClickCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [bgColor, setBgColor] = useState("#f0f8ff");

  // 事件處理函數們
  //1.點擊事件
  const handleClick = () => {
    setMessage(`You clicked the button！`);
    setClickCount((prev) => prev + 1);
  };
  //2.雙擊事件
  const doubleClick = () => {
    setMessage(`You doubled click!!`);
    setClickCount((prev) => prev + 2);
  };
  //3.滑鼠進入
  const handleMouseEnter = () => {
    setMessage(`Mouse In`);
    setBgColor("#ffe6e6");
  };
  //4.滑鼠移開
  const handleMouseLeave = () => {
    setMessage(`Mouse Out`);
    setBgColor("#e6f3ff");
  };
  //5.重置事件
  const handleReset = () => {
    setMessage(`You want to reset`);
    setClickCount(0);
    setInputText("");
    setBgColor("#f0f8ff");
  };
  //6. 輸入事件
  const handleInput = (e) => {
    setInputText(e.target.value);
    setMessage(`You enter:${e.target.value}`);
  };
  //7.提交事件
  const submitForm = (e) => {
    setMessage(`Your info is：${inputText}`);
  };

  return (
    <>
      <div className="event-container" style={{ backgroundColor: bgColor }}>
        <h1>🎯 Event Handler</h1>
        <div className="message-display">
          {/**訊息顯示區 */}
          {message}
        </div>

        <div className="click-counter">
          {/**點擊次數區 */}
          <p>Total Click Count：{clickCount}</p>
        </div>
        <div className="event-grid">
          {/**事件按鈕區 */}
          <button className="event-button btn-click" onClick={handleClick}>
            🖱️ Click me
          </button>
          <button
            className="event-button btn-double-click"
            onDoubleClick={doubleClick}
          >
            👆 Double Click Me
          </button>
          <button
            className="event-button btn-click"
            style={{ background: "orange" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            🐭 Mouse In
          </button>
          <button className="event-button btn-reset" onClick={handleReset}>
            🔄 Reset Everything
          </button>
        </div>
        <div className="input-section">
          {/**輸入區 */}
          <h3>📝 Input section</h3>
          <input
            className="input-field"
            type="text"
            onChange={handleInput}
            value={inputText}
            placeholder="type something...."
          />
          <button className="btn-submit" onClick={submitForm}>
            {" "}
            📤 Submit!!
          </button>
        </div>
      </div>
    </>
  );
}

export default EventHandler;
