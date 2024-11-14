import React, { useState } from 'react';



function Task() {

    const [task, setTask] = useState("");
    const [box1, setBox1] = useState("");
    const [box2, setBox2] = useState("");
    const [taskCount, setTaskCount] = useState(0);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (taskCount % 2 === 0) {
            setBox1(task);
        } else {
            setBox2(task);
        }
        setTaskCount(taskCount + 1);
        setTask(""); 
    };

  return (
    <div className="Task">
    <h2>Learning WEB</h2>
    <div className="input-container">
        <input
            type="text"
            id="todoInput"
            placeholder="Add a new task"
            value={task}
            onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>New Task</button>
    </div>
    <div className="boxes">
        <div className="box">
            <h3>Box 1</h3>
            <p>{box1}</p>
        </div>
        <div className="box">
            <h3>Box 2</h3>
            <p>{box2}</p>
        </div>
    </div>
</div>
);

}

export default Task