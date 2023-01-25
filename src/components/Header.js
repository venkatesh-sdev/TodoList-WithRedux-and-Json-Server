import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const state = useSelector(state => state.tasks)
    return (
        <div className='mt-10 flex flex-col justify-center items-center mx-auto'>
            <h1 className='text-4xl font-semibold text-indigo-600'>Task Management</h1>
            <h2 className='mt-5 text-2xl font-light'>Currently ( {state.taskList.length} ) Tasks Pending</h2>
        </div>
    )
}

export default Header