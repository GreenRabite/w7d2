import React from 'react';
import ErrorList from './error_list';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  uniqueId() {
   return new Date().getTime();
  }
  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: this.uniqueId() });
    this.props.createTodo(todo);
    this.setState({
      title: "",
      body: ""
    }); // reset form
  }
  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <ErrorList errors={ this.props.errors } />
        <label>Title:
        <br/>
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}/>
        </label>
        <br/>
        <label>Body:
          <br/>
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={this.update('body')}></textarea>
        </label>
        <br/>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
}
export default TodoForm;
