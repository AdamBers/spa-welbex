const GET_TODOS = 'GET_TODOS'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const EDIT_TODO = 'EDIT_TODO'

const defaultState = {
    todos: []
}

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, todos: [...state.todos, ...action.payload] }
        case ADD_TODO: {
            if (action.payload !== '') {
                const newTask = {
                    userId: 11,
                    id: state.todos[state.todos.length - 1].id + 1,
                    title: action.payload,
                    completed: false
                }
                return { ...state, todos: [...state.todos, newTask] }
            }
            return state
        }
        case REMOVE_TODO: {
            return { ...state, todos: [...state.todos.filter((todo) => todo.id !== action.payload)] }
        }

        case EDIT_TODO: {
            state.todos.forEach(element => {
                if (element.id === action.payload.id) {
                    element.title = action.payload.title

                }
            })
            return state
        }
        default:
            return state
    }
}

export const getTodosAction = (payload) => ({ type: GET_TODOS, payload })
export const addTodoAction = (payload) => ({ type: ADD_TODO, payload })
export const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload })
export const editTodoAction = (Id, Title) => {
    return {
        type: EDIT_TODO,
        payload: { id: Id, title: Title }
    }
}