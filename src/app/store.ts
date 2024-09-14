import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/+state/counter.slice";
import taskReducer from "../features/tasks/+state/task.slice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch