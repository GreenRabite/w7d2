import { getTodos, makeTodo } from "../util/todo_api_util";
import { receiveErrors } from "./error_actions";

export const receiveTodos = (todos = {}) =>{
  return {
    type: 'RECEIVE_TODOS',
    todos
  };
};

export const receiveTodo = (todo = {}) =>{
  return {
    type: 'RECEIVE_TODO',
    todo
  };
};

export const fetchTodos = () => dispatch =>
  getTodos().then(todos => dispatch(receiveTodos(todos))
);

export const createTodo = todo => dispatch =>
  makeTodo(todo).then(serverTodo => dispatch(receiveTodo(serverTodo)),
  (err) => { dispatch(receiveErrors(err.responseJSON)); }
);


export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
