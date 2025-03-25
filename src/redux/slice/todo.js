import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Our action is fetchTodos
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    // ** This response.json() will automatically stored in action.payload!!
    return response.json();
})

// This is our STORE!!
const todoSlice = createSlice({
    // the name of our slice
    name: "todo",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error :", action.payload);
            state.isError = true;
        })
    }
})

export default todoSlice.reducer;