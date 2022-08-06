import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getTodoAsync = createAsyncThunk(
    'todos/getTodoAsync',
    async (obj, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
        const response = await fetch("http://localhost:3001/todos")
        const data = await response.json()
        return data
    }
)

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (todo, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        let curTodos = getState().todos.data
        let res = await fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }).then(
            res => res.json()
        )
        let newTodos = [...curTodos, res]
        return newTodos
    }
)

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (todoId, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        let curTodos = getState().todos.data
        try {
            await fetch("http://localhost:3001/todos/" + todoId, {
                method: "DELETE"
            }).then(
                res => res.json()
            )
            const _todos = curTodos.filter(todo => todo.id !== todoId)
            return _todos
        } catch (err) {
            return err
        }
    }
)

export const updateTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (objData, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        const { id, completed } = { ...objData }
        let curTodos = getState().todos.data
        try {
            let res = await fetch("http://localhost:3001/todos/" + id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                   completed: !completed
                })
            }).then(
                res => res.json()   //it will contain updated values from backend
            )
            const _todos = curTodos.map( todo => todo.id === res.id ? res : todo ) 
            return _todos
        } catch (err) {
            return err
        }
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
    loading:null
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
            state.loading = "Loading"
        },
        [getTodoAsync.fulfilled]: (state, action) => { //todos/getTodoAsync/fulfilled
            console.log("fulfilled")
            state.data = action.payload
            state.loading = null
        },
        [getTodoAsync.rejected]: (state, action) => { //todos/getTodoAsync/rejected
            console.log("rejected")
        },
        [addTodoAsync.pending]: (state, action) => {
            state.loading = "Adding"
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            console.log("fulfilled", action.payload)
            state.data = action.payload
            state.loading = null
        },
        [addTodoAsync.rejected]: (state, action) => {
            console.log("rejected")
        },
        [deleteTodoAsync.pending]: (state, action) => {
            state.loading = "Deleting"
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            console.log("fulfilled", action.payload)
            state.data = action.payload
            state.loading = null
        },
        [deleteTodoAsync.rejected]: (state, action) => {
            console.log("rejected")
        },
        [updateTodoAsync.pending]: (state, action) => {
            state.loading = "Updating"
        },
        [updateTodoAsync.fulfilled]: (state, action) => {
            console.log("fulfilled", action.payload)
            state.data = action.payload
            state.loading = null
        },
        [updateTodoAsync.rejected]: (state, action) => {
            console.log("rejected")
        },

    }
})

// Action creators are generated for each case reducer function

export const { getTodo, addTodo, deleteTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer