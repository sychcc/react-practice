import React, { useState, useEffect } from "react";
import "./ClockApp.css";
function ClockApp() {
  //1.紀錄當前時間
  const [currentTime, setCurrentTime] = useState(new Date());
  //2.是否顯示時間
  const [isRunning, setIsRunning] = useState(true);
  //3. 時間格式(12,24)
  const [is24hr, setIs24hr] = useState(false);
  //4. 主題變更
  const [theme, setTheme] = useState("light");

  //時間計時器 => 時間沒有暫停才要計時
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    console.log(`開始計時`);
    //每秒更新時間
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    //清理函數 => 時間暫停就不再計時
    return () => {
      clearInterval(timer);
      console.log(`停止計時`);
    };
  }, [isRunning]);
  //切換主題 => 根據時間改變主題 or 手動切換
  useEffect(() => {
    const hour = currentTime.getHours();
    //白天時間
    if (hour >= 6 && hour < 18) {
      if (theme !== "light") {
        console.log("切換成白天模式");
        setTheme("light");
      }
    } else {
      if (theme !== "dark") {
        console.log("切換成黑夜模式");
        setTheme("dark");
      }
    }
  }, [currentTime, theme]);
  //更新時間標題=>時間有變動就更新時間
  useEffect(() => {
    const timeString = currentTime.toLocaleTimeString();
    document.title = `時間為${timeString}`;
  }, [currentTime]);
  // 格式化時間顯示
  const formatTime = (date) => {
    if (is24hr) {
      //24小時制 14:30
      return date.toLocaleTimeString("zh-TW", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    } else {
      //12小時制 下午2:30
      return date.toLocaleTimeString("zh-TW", {
        hour12: true,
      });
    }
  };
  //格式化日期

  const formatDate = (date) => {
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  };

  return (
    <>
      <div className={`clock-container ${theme}`}>
        <h1 style={{ color: "white" }}>⏰Simple Clock</h1>
        {/**ˋ主題顯示 */}
        <div className="theme-display">
          {theme === "light" ? "🌅 Day Mode" : "🌙 Night Mode"}
        </div>
        {/**時間顯示 */}
        <div className="time-display">{formatTime(currentTime)}</div>
        {/**日期顯示 */}
        <div className="date-display">{formatDate(currentTime)}</div>
        {/**控制按鈕 */}
        <div className="controls">
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={() => setIs24hr(!is24hr)}>🕐Time Format</button>
        </div>
      </div>
    </>
  );
}

export default ClockApp;
