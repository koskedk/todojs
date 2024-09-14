import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

interface CounterState {
    value:number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            state.value++
        },
        decremented(state) {
            state.value--
        },
        incrementedByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        }
    }
})

export const { incremented, incrementedByAmount, decremented } = counterSlice.actions;
export const selectTasks=(state:RootState)=>state.tasks.tasks
export default counterSlice.reducer