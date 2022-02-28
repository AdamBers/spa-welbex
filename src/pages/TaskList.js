import React from 'react'

import Pagination from '../components/pagination'
import InputItem from '../components/input-item'

export const TaskList = () => {
    return (
        <div className='tasks-list'>
            <InputItem />
            <Pagination />
        </div >
    )
}