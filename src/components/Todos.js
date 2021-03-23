import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addTodo, deleteTodo, getTodos } from '../redux/actions/index';
import Todo from './Todo';

// my todo object constructor
function TodoObj(id, text) {
    this.id = id;
    this.text = text;
}

function ConnectedTodosForm({ addTodo, todos }) {
    const [text, setText] = useState('');

    useEffect(() => {
      getTodos();
      console.log(todos);
    });

    const handleText = (e) => {
        setText(e.target.value.trim());
    }
    const handleAddTodo = (e) => {
        e.preventDefault();
        const todo = new TodoObj(new Date().getTime(), text);
        if(text){
          addTodo(todo);
        }
        setText('');
      }

  return (
    <div className="container">
        <h2>add a todo</h2>
      <form>
        <input type="text" name="text" onChange={handleText} />
        <button onClick={handleAddTodo}>
          handle add todo
        </button>
      </form>
      <ul>
      {todos.map(todo => (<Todo todo={todo} key={todo.id} />))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: payload => dispatch(addTodo(payload)),
  deleteTodo: payload => dispatch(deleteTodo(payload)),
  getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedTodosForm);