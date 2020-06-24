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

const ADD_TODO = createAction("ADD_TODO");

const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    payload: { id: nanoid(), text, isDone: false },
  };
};

const rootReducer = createReducer(state, {
  ADD_TODO: (state, action) => {
    state.push(action.payload);
  },
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
