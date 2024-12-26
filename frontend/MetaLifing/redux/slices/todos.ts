import { TaskFields, TaskId, TodoInitialState } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TodoInitialState = {
  array: [],
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskFields>) => {
      state.array.push({ ...action.payload, id: new Date().toISOString() })
    },
    toggleTask: (state, action: PayloadAction<TaskId>) => {
      const task = state.array.find((task) => task.id === action.payload)

      if (task) {
        task.isDone = !task.isDone
      }
    },
    deleteTask: (state, action: PayloadAction<TaskId>) => {
      state.array.filter((task) => task.id !== action.payload)
    },
    updateTask: (state, action: PayloadAction<TaskFields>) => {
      const index = state.array.findIndex(
        (task) => task.id === action.payload.id
      )
      if (index !== -1) {
        state.array[index] = action.payload
      }
    },
  },
})

export const { addTask, toggleTask, deleteTask, updateTask } = todoSlice.actions

export default todoSlice.reducer
