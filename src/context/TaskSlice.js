import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
        taskList: [],
        selectedTask: {},
    },
    reducers: {
        addToList: (state, actions) => {
            const id = Math.floor(Math.random() * 1000);
            const task = { ...actions.payload, id};
            state.taskList.push(task)
        },
        removeFromList: (state, actions) => {
            state.taskList = state.taskList.filter(task => task.id !== actions.payload.id)
        },
        updateList: (state, actions) => {
            state.taskList = state.taskList.map(task => task.id === actions.payload.id ? actions.payload : task)
        },
        setSelectedTask: (state, actions) => {
            state.selectedTask = actions.payload;
        }
    }
})


export const { addToList, removeFromList, updateList, setSelectedTask } = TaskSlice.actions;

export default TaskSlice.reducer;