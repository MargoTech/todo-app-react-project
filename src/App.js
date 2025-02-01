import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {tasks.map((tasks) => (
          <li key={tasks.id}>{tasks.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
