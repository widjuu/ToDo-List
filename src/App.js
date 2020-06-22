import React from "react";

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

const App = () => {
  return (
    <div>
      <div>
        <h4>ToDo List</h4>
        <textarea></textarea> <button>Add todo</button>
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
