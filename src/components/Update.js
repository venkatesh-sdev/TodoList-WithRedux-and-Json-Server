import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateList } from "../context/TaskSlice";

export default function Modal({ setShowModal, showModal }) {

    const state = useSelector(state => state.tasks.selectedTask)
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    
    useEffect(() => {
        if (Object.keys(state).length !== 0) {
            setTitle(state.title);
            setDesc(state.desc);
        }
    }, [state])

    const updateTask = (e) => {
        e.preventDefault();
        dispatch(updateList({ title, desc, id: state.id }))
        setShowModal(false);
    }
    return (
        <Fragment>
            {showModal ? (
                <Fragment>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Update Task
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black  h-6 w-6 text-4xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <form className='flex flex-col mt-10 items-center justify-center p-5'>
                                    <div className='flex flex-col mx-auto gap-2'>
                                        <label className='text' htmlFor='task'>
                                            Task:
                                        </label>
                                        <input
                                            type='text'
                                            id='task'
                                            placeholder='Enter the task'
                                            className='w-96 border-2 px-4 py-2 border-gray-400 rounded-md'
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                            required />
                                    </div>
                                    <div className='mt-5 flex flex-col gap-2'>
                                        <label className='text'
                                            htmlFor='desc'
                                        >
                                            Descripition:
                                        </label>
                                        <input
                                            type='text'
                                            id='desc'
                                            placeholder='Enter the Description'
                                            className='w-96 border-2 px-4 py-2 border-gray-400 rounded-md'
                                            onChange={(e) => setDesc(e.target.value)}
                                            value={desc}
                                            required />
                                    </div>
                                    <button
                                        type='submit'
                                        className='mt-5 bg-indigo-700 text-white font-medium px-4 py-2 rounded-md'
                                        onClick={updateTask}
                                    >Update Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </Fragment>
            ) : null}
        </Fragment>
    );
}