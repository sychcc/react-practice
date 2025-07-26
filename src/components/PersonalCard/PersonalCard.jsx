import React, { useState } from "react";
import "./PersonalCard.css";
function PersonalCard() {
  //原有的卡片名單
  const [cards, setCards] = useState([
    { id: 1, name: "Syrena", job: "Web developer", age: 30 },
    { id: 2, name: "Pig", job: "Web developer", age: 32 },
    { id: 3, name: "Money", job: "Dog", age: 8 },
  ]);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");

  const addCard = () => {
    if (name && job && age) {
      const newCard = {
        id: new Date(),
        name: name,
        job: job,
        age: age,
      };
      setCards([...cards, newCard]);
      //清除資料
      setAge("");
      setJob("");
      setName("");
    }
  };
  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div>
      <h2>Personal Card</h2>
      <div className="add-form">
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type your job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          max="100"
          min="0"
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={addCard}>Add New Card</button>
      </div>
      <div className="cards-list">
        {cards.map((card) => (
          <div key={card.id}>
            <h3>Name: {card.name}</h3>
            <p>Job: {card.job}</p>
            <p>Age: {card.age} years old.</p>
            <button onClick={() => deleteCard(card.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PersonalCard;
