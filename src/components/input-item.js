import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store/todosReducer';

const InputItem = () => {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const dispatch = useDispatch()
    return (
        <div className='input-text'>
            <input
                value={userInput}
                type='text'
                placeholder='Insert new task ...'
                onChange={handleChange}
            />
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch(addTodoAction(userInput))}
            >
                Add
            </button>
        </div>
    );
}

export default InputItem;
