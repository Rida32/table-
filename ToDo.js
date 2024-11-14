import React, { useState } from 'react';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    
    if (inputValue !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue(""); 
    }
  };

  return (
    <div className="Daily">
      <h2>Daily Routine</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>New Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index + 1}. {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
