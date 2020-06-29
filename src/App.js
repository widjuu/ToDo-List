import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo } from "./redux/store";

export const App = () => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const addTodos = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <div>
      <div>
        <form onSubmit={addTodos}>
          <h4>ToDo List</h4>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit">Add todo</button>
        </form>
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
              <button onClick={() => dispatch(delTodo(task._id))}>del</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
