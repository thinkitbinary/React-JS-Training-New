import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: "Our App",
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        updateBrandName: (state, action) => {
            state.data = action.payload // state.value = state.value + action.payload // state.value = 0 + 5 
        },
    },
})

// Action creators are generated for each case reducer function

export const { updateBrandName } = navbarSlice.actions

export default navbarSlice.reducer