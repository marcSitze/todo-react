import React, { useState } from "react";

// my todo object constructor
function Todo(id, text) {
    this.id = id;
    this.text = text;
}
document.querySelector('form').text.focus();
function Todos() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const handleText = (e) => {
        setText(e.target.value.trim());
    }
    const addTodo = (e) => {
        e.preventDefault();
        const todo = new Todo(new Date().getTime(), text)
        const todoArr = [...todos];
        if(text){
            todoArr.push(todo);
            setTodos(todoArr)
        }
        setText('');
        e.target.form.reset();
        e.target.focus();
        addFocus();    }
    const handleDel = (e) => {
        const getTodos = [...todos];
        
        getTodos.forEach((todo, index) => {
            if(todo.id === Number(e.target.getAttribute('data-id'))) {
                getTodos.splice(index, 1);
                setTodos(getTodos);
            }
        })
        addFocus();
    }
    const addFocus = () => {
        document.querySelector('form').text.focus();
    }
    // window.todos = todos;
  return (
    <div className="container">
        <h2>add a todo</h2>
      <form>
        <input type="text" name="text" onChange={handleText} />
        <button type="submit" onClick={addTodo}>
          add
        </button>
      </form>
      <ul>
      {todos.map(todo => (
          <li key={todo.id} data-id={todo.id}>{todo.text} <button className="btn btn-close" data-id={todo.id} onClick={handleDel}>&times;</button></li>
      ))}
      </ul>
    </div>
  );
}

export default Todos;