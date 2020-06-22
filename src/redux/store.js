import { createStore, combineReducers } from "redux";

const reducers = combineReducers({});
const store = createStore(reducers);

export default store;

/*const store = {
  state: {
    todo: [],
  },
  getState() {
    return this.state;
  },
};

export default store;
*/
