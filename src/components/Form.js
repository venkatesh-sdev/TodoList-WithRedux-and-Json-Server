import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../context/TaskSlice';

const Form = () => {
    const state = useSelector(state=>state.tasks);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const addTask = (e)=>{
        e.preventDefault();
        dispatch(addToList({title,desc}));
        setTitle('')
        setDesc('')
    }

    return (
        <form className='flex flex-col mt-10 items-center justify-center'>
            <div className='flex flex-col mx-auto gap-2'>
                <label className='text' htmlFor='task'>
                    Task:
                </label>
                <input
                    type='text'
                    id='task'
                    placeholder='Enter the task '
                    className='w-96 border-2 px-4 py-2 border-gray-400 rounded-md'
                    onChange={(e)=>setTitle(e.target.value)}
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
                    onChange={(e)=>setDesc(e.target.value)}
                    value={desc}
                    required />
            </div>
            <button
                type='submit'
                className='mt-5 bg-indigo-700 text-white font-medium px-4 py-2 rounded-md'
                onClick={addTask}
                >Add Task</button>
        </form>
    )
}

export default Form