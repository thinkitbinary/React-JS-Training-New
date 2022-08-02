import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../appData/data'
const initialState = {
    data: [...data],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            state.data.push(action.payload)  //push a new activity
        },
        deleteTodo: (state, action) => {
            const _todos = state.data.filter(ele => ele.id !== action.payload ) // filter todos by elemenating delete activiy
            state.data = [..._todos] // 
        },
        updateTodo: (state, action) => {
            state.data = [...action.payload] // updating with new array 
        },
    },
})

// Action creators are generated for each case reducer function

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer