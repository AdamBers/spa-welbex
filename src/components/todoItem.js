import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodoAction } from '../store/todosReducer';

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch()
    return (
        <div className='task-item' key={todo.id}>
            <div className='task-item-id'>{index + 1}</div>
            <div className='task-item-title'>{todo.title}</div>
            <button className="btn btn-outline-primary">
                Edit
            </button>

            <button className="btn btn-outline-danger"
                onClick={() => dispatch(removeTodoAction(todo.id))}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;


