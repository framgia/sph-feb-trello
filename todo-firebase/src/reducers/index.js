import TodoReducers from "./TodoReducers";
import { combineReducers } from "redux";

export default combineReducers({
  todos: TodoReducers,
});
