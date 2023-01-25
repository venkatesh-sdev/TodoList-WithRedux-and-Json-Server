import React from 'react'

const Header = () => {
    return (
        <div className='mt-10 flex flex-col justify-center items-center mx-auto'>
            <h1 className='text-4xl font-semibold text-indigo-600'>Task Management</h1>
            <h2 className='mt-5 text-2xl font-light'>Currently 0 Tasks Pending</h2>
        </div>
    )
}

export default Header