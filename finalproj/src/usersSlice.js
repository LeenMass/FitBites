import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
    categories: []
}
const usersSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        loadCategories: (state, action) => {
            [state.categories, ...action.payload]
        },
        addcategory: ((state, action) => {
            const category = {
                id: v4(),
                ...action.payload
            }
            { state.categories.push(category) }
        })
    }

})
export const { addcategory, loadCategories } = usersSlice.actions;

export default usersSlice.reducer;