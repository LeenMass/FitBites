import { createSlice } from "react-redux";
import { v4 } from "uuid";
const initialState = {
    categories: [],
    products: []
}
const usersSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        loadCategories: (state, action) => {

            const v = action.payload

            state.categories = v;
        },
        loadProducts: (state, action) => {

            const products = action.payload

            state.products = products;
        },

    }
},
)
export const { loadCategories, loadProducts } = usersSlice.actions;

export default usersSlice.reducer;