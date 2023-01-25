import React, { useState } from 'react';
import { AiOutlineDelete, } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { Update } from '.';

const Task = () => {
    const [showModal, setShowModal] = useState(false);

    const editTask = () => {
        console.log('Edit');
        setShowModal(true);
    }

    const deleteTask = () => {
        console.log('Completed')
    }

    return (
        <React.Fragment>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 max-w-4xl mx-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripition
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  hover:bg-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              Task 1
                            </th>
                            <td className="px-6 py-4">
                                hek fjalkdjlfkjafl jf fjalkjfd fkdjf fkjakljkf jhkdjmsfklajdlkfj fjkljafkljfklf
                                hek fjalkdjlfkjafl jf fjalkjfd fkdjf fkjakljkf jhkdjmsfklajdlkfj fjkljafkljfklf
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => deleteTask()}
                                    className='px-4 py-2 bg-red-800 text-white rounded-md'><AiOutlineDelete className='text-xl' /></button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => editTask()}
                                    className='px-4 py-2 bg-indigo-800 text-white rounded-md'><BiEdit className='text-xl' /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Update showModal={showModal} setShowModal={setShowModal} />
        </React.Fragment>

    )
}

export default Task