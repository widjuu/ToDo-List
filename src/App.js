import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, toggleTodo } from "./redux/store";

export const App = () => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const addClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const delClick = (e, _id) => {
    e.stopPropagation();
    dispatch(delTodo(_id));
  };

  const isDoneClick = (e, _id) => {
    e.stopPropagation();
    dispatch(toggleTodo(_id));
  };

  return (
    <div>
      <div>
        <form onSubmit={addClick}>
          <h4>ToDo List</h4>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit">Add todo</button>
        </form>
      </div>

      <div>
        <ol>
          {tasks.map((task) => (
            <li key={task._id}>
              <button onClick={(e) => isDoneClick(e, task._id)}>\/</button>
              {task.isDone ? (
                <strike>{task.text}</strike>
              ) : (
                <span>{task.text}</span>
              )}
              <button onClick={(e) => delClick(e, task._id)}>del</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
