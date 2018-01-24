import { connect } from "react-redux";
import TodoList from "./todo_list";

import { receiveErrors, clearErrors } from "../../actions/error_actions";
import { receiveTodos, receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
