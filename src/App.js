import React, { useState } from "react";

const tasks = [
  {
    _id: 1,
    text: "create react app",
    isDone: true,
  },
  {
    _id: 2,
    text: "add git",
    isDone: true,
  },
  {
    _id: 3,
    text: "add redux",
    isDone: false,
  },
  {
    _id: 4,
    text: "working hard",
    isDone: false,
  },
];

const App = (store) => {
  const [value, setValue] = useState("");

  const addClick = () => {
    console.log(value);
  };

  return (
    <div>
      <div>
        <h4>ToDo List</h4>
        <textarea onChange={(e) => setValue(e.target.value)}>{value}</textarea>
        <button onClick={addClick}>Add todo</button>
      </div>

      <div>
        <ol>
          {tasks.map((task) => (
            <li key={task._id}>
              <button>\/</button>
              {task.isDone ? (
                <strike>{task.text}</strike>
              ) : (
                <span>{task.text}</span>
              )}
              <button>del</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
