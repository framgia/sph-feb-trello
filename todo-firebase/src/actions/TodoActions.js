import { ACTION_TYPES } from "./index";

export const setTodos = (todos) => {
  return {
    type: ACTION_TYPES.SET_TODOS,
    payload: {
      todos, // same with todos: todos
    },
  };
};

export const addTodo = (todo) => {
  return {
    type: ACTION_TYPES.ADD_TODO,
    payload: {
      todo,
    },
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: ACTION_TYPES.TOGGLE_TODO,
    payload: {
      todoId,
    },
  };
};

export const removeTodo = (todoId) => {
  return {
    type: ACTION_TYPES.REMOVE_TODO,
    payload: {
      todoId,
    },
  };
};
