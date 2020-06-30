import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const state = [
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

export const addTodo = createAction("ADD_TODO", (text) => {
  return {
    type: "ADD_TODO",
    payload: { _id: nanoid(), text, isDone: false },
  };
});

export const delTodo = createAction("DEL_TODO", (_id) => {
  return {
    type: "DEL_TODO",
    payload: { _id },
  };
});

export const toggleTodo = createAction("TOGGLE_TODO", (_id) => {
  return {
    type: "TOGGLE_TODO",
    payload: { _id },
  };
});

const rootReducer = createReducer(state, {
  [addTodo]: (state, action) => {
    state.push(action.payload);
  },
  [delTodo]: (state, action) => {
    state.filter((state) => state._id !== action.payload._id);
  },
  [toggleTodo]: (state, action) => {
    state.map((task) =>
      task._id === action.payload._id ? { ...task, isDone: !task.isDone } : task
    );
  },
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
