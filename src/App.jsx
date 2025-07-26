import PersonalCard from "./components/PersonalCard/PersonalCard";
import Counter from "./components/Counter/Counter";
import ClockApp from "./components/ClockApp/ClockApp";
import EventHandler from "./components/EventHandler/EventHandler";
import ConditionRendering from "./components/ConditionalRendering/ConditionRendering";
import ListRendering from "./components/Listrendering/ListRendering";
import ReactForm from "./components/ReactForm/ReactForm";
import "./App.css";
import { useState } from "react";
function App() {
  //設定tab切換
  const [activeTab, setActiveTab] = useState("personalCard");
  const projects = {
    personalCard: <PersonalCard></PersonalCard>,
    counter: <Counter />,
    clockApp: <ClockApp />,
    eventHandler: <EventHandler />,
    conditionRendering: <ConditionRendering />,
    listRendering: <ListRendering />,
    reactForm: <ReactForm />,
  };
  return (
    <>
      <div className="app-container">
        <h1>React Practice Project</h1>
        {/**切換專案按鈕 */}
        <div>
          <nav>
            <button
              className={activeTab === "personalCard" ? "active" : ""}
              onClick={() => setActiveTab("personalCard")}
            >
              Personal Card
            </button>
            <button
              className={activeTab === "counter" ? "active" : ""}
              onClick={() => setActiveTab("counter")}
            >
              Counter
            </button>
            <button
              className={activeTab === "clockApp" ? "active" : ""}
              onClick={() => setActiveTab("clockApp")}
            >
              Clock App
            </button>
            <button
              className={activeTab === "eventHandler" ? "active" : ""}
              onClick={() => setActiveTab("eventHandler")}
            >
              Event Handler
            </button>
            <button
              className={activeTab === "conditionRendering" ? "active" : ""}
              onClick={() => setActiveTab("conditionRendering")}
            >
              Condition Rendering
            </button>
            <button
              className={activeTab === "listRendering" ? "active" : ""}
              onClick={() => setActiveTab("listRendering")}
            >
              List Rendering
            </button>
            <button
              className={activeTab === "reactForm" ? "active" : ""}
              onClick={() => setActiveTab("reactForm")}
            >
              React Form
            </button>
          </nav>
          <main>{projects[activeTab]}</main>
        </div>
      </div>
    </>
  );
}

export default App;
