import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompleteTask, DeleteTask, NewTask, Task } from "../model/task";
import { liveId } from "../../../shared/utils";

interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<NewTask>) {
            const newTask = {
                ...action.payload,
                id: liveId(),
                complete: false,
                created: new Date().toISOString()
            }
            state.tasks.push(newTask)
        },
        completeTask(state, action: PayloadAction<CompleteTask>) {
            const task = state.tasks.find(x => x.id === action.payload.id)
            if (task) {
                task.complete = !task.complete
            }
        },
        deleteTask(state, action: PayloadAction<DeleteTask>) {
            state.tasks= state.tasks.filter(x => x.id !== action.payload.id)
        }
    }
})


export const { addTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer