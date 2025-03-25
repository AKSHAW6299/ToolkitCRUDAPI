import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todo' //we can import by any name!

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})