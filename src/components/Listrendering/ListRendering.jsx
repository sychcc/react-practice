import React, { useState } from "react";
import "./ListRendering.css";
function ListRendering() {
  //水果狀態
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);
  const [newItem, setNewItem] = useState("");
  //顏色陣列
  const colors = ["Red", "Black", "Blue", "Orange", "Green"];
  //學生陣列
  const students = [
    { name: "Syrnea", age: 20, major: "CS" },
    { name: "Kevin", age: 20, major: "Architecture" },
    { name: "Money", age: 8, major: "Math" },
  ];
  //新增item
  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      //清空new Item區域
      setNewItem("");
    }
  };

  //刪除item
  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="list-container">
      <h1>Simple List Rendering</h1>
      <div className="card-section fruit-section">
        <h3>Fruits List</h3>
        <ul className="fruit-list">
          {items.map((item, index) => (
            <li className="fruit-item" key={index}>
              {item}
              <button
                className="delete-button"
                onClick={() => deleteItem(index)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-item-section">
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          className="input-field"
          placeholder="Add new fruits..."
        />
        <button className="add-button" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="card-section color-section">
        <h3>🎨 Color List</h3>
        <div className="color-grid">
          {colors.map((color, index) => (
            <div className={`color-item ${color.toLowerCase()}`} key={index}>
              {color}
            </div>
          ))}
        </div>
      </div>
      <div className="card-section student-section">
        <h3>Student List</h3>
        {students.map((student, index) => (
          <div className="student-item" key={index}>
            <strong>{student.name}</strong>- is {student.age} years old, major
            is {student.major}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListRendering;
