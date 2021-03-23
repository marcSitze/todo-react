import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions/index';

function Todo({ todo, deleteTodo }) {

    const handleDel = (e, todoId) => {
        deleteTodo(todoId);
    }
    return (
        <div>
            <li key={todo.id} data-id={todo.id}>{todo.text} <button className="btn btn-close" onClick={e => handleDel(e, todo.id)}>&times;</button></li>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: payload => dispatch(deleteTodo(payload)),
});

export default connect(null, mapDispatchToProps)(Todo);