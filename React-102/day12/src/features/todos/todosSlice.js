import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getTodoAsync = createAsyncThunk(
    'todos/getTodoAsync',
    async (obj, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
        const response = await fetch("http://localhost:3001/todos")
        const data = await response.json()
        return data
    }
)

// export const addTodoAsync = createAsyncThunk(
//     'todos/addTodoAsync',
//     async (todo, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
//         let curTodo = getState().todos.data
//         let res = await fetch("http://localhost:3001/todos", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(todo)
//         }).then(
//             res => res.json()
//         )
//         let resultTodo = [...curTodo,res]
//         return resultTodo
//     }
// )

const initialState = {
    data: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodo: (state, action) => {
            // let todoResDB = fetchApiAsync()
            // console.log(todoResDB)
        },
        addTodo: (state, action) => {
            console.log(action.payload)
            state.data.push(action.payload)  //push a new activity
        },
        deleteTodo: (state, action) => {
            const _todos = state.data.filter(ele => ele.id !== action.payload) // filter todos by elemenating delete activiy
            state.data = [..._todos] // 
        },
        updateTodo: (state, action) => {
            state.data = [...action.payload] // updating with new array 
        }
    },
    extraReducers: {
        [getTodoAsync.pending]: (state, action) => {  //todos/getTodoAsync/pending
            console.log("loading")
        },
        [getTodoAsync.fulfilled]: (state, action) => {
            console.log("fulfilled")
            state.data = action.payload
        },
        [getTodoAsync.rejected]: (state, action) => {
            console.log("rejected")
        },
        // [addTodoAsync.pending]: (state, action) => { 
        //     console.log("loading")
        // },
        // [addTodoAsync.fulfilled]: (state, action) => {
        //     console.log("fulfilled")
        //     state.data = action.payload
        // },
        // [addTodoAsync.rejected]: (state, action) => {
        //     console.log("rejected")
        // },
    }
})

// Action creators are generated for each case reducer function

export const { getTodo, addTodo, deleteTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer