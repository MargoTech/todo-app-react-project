import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = { id: Date.now(), text: inputValue };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input>
        type="text" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="enter the task"
      </input>
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((tasks) => (
          <li key={tasks.id}>
            {tasks.text}
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
