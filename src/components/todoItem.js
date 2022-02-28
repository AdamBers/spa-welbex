import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodoAction, editTodoAction } from '../store/todosReducer';

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        // console.log(userInput)
    }

    const handleClick = () => {
        if (userInput) {
            dispatch(editTodoAction(todo.id, userInput))
        }
    }

    return (
        <div className='task-item' key={todo.id}>
            <div className='task-item-id'>{index + 1}</div>

            <input
                className='task-item-title'
                type='text'
                // readOnly="readonly"
                defaultValue={todo.title}
                onChange={handleChange}
            />

            <button className="btn btn-outline-primary" onClick={handleClick}>
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


