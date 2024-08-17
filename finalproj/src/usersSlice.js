import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
    users: []
}
const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: ((state, action) => {
            const user = {
                id: v4(),
                ...action.payload
            }
            { state.users.push(user) }
        })
    }

})
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;