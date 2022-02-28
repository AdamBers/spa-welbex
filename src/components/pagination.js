import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './todoItem'

const Pagination = () => {

    const allTodos = useSelector(state => state.todos)
    const itemPerPage = 10
    const [pagesCount, setPagesCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setPagesCount(Math.ceil(allTodos.length / itemPerPage))
        setTodos(allTodos.slice(currentPage * itemPerPage - itemPerPage, currentPage * itemPerPage))
    }, [currentPage, allTodos])

    const changePage = (i) => {
        setCurrentPage(i)
    }

    const buttons = []
    for (let i = 0; i < pagesCount; i++) {
        buttons.push(<li key={i} onClick={() => changePage(i + 1)}><span>{i + 1}</span></li>)
    }


    return (
        <div>
            {todos.map((todo, index) =>
                <TodoItem todo={todo} index={index} key={index} />
            )
            }
            <div className="pagination">
                {buttons}
            </div>
        </div>
    )
}

export default Pagination;

