import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import navbarReducer from '../features/navbar/navbarSlice'
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    todos : todosReducer
  },
})