import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log({ "action": action.payload })
            return state = action.payload
        },
    },
})

export const { addUser } = userLoginSlice.actions

export default userLoginSlice.reducer