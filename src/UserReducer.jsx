import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const {id,name,email} = action.payload
            const userToUpdate = state.find(user => user.id == id)
            if (userToUpdate) {
                userToUpdate.name = name
                userToUpdate.email = email
            }
        },
        deleteUser: (state, action) => {
            const id = action.payload.id
            const userToDelete = state.find(user => user.id == id)
            if (userToDelete) {
                return state.filter(user => user.id !== id)
            }
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions
export default userSlice.reducer