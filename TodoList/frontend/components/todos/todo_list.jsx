import React from 'react';
import TodoForm from "./todo_form";

class TodoList extends React.Component {

  componentWillMount(){
    this.props.fetchTodos();
  }

  render() {
    const {todos, errors} = this.props;
    const list = this.props.todos.map((item, i) =>
     <li key={i}><strong>{item.title}</strong><br></br>{item.body}</li>);
    const createTodo = this.props.createTodo;

    return(
      <div>
      <h3>Todo list</h3>
        <ul className="todo-list">
          { list }
        </ul>
        <TodoForm createTodo={ createTodo } errors={errors}/>
      </div>
    );
  }
}

export default TodoList;
