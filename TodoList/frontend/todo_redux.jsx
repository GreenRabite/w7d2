import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import App from "./components/app";
import {receiveTodos, receiveTodo, fetchTodos} from "./actions/todo_actions";
import { allTodos } from "./reducers/selectors";
import Root from "./components/root";
import { getTodos } from "./util/todo_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  // ReactDOM.render(<h1>In the React!</h1>, root);
  const store = configureStore;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.fetchTodos = fetchTodos;
  window.store = store;
  window.getTodos = getTodos;
  window.selector = allTodos(store.getState());
  ReactDOM.render(<Root store = { store } />, root);
  // ReactDOM.render(<App />, root);
  });
