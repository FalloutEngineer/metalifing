import { TaskFields, TaskId } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TaskFields[] = []

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskFields>) => {
      state.push({ ...action.payload })
    },
    toggleTask: (state, action: PayloadAction<TaskId>) => {
      const task = state.find((task) => task.id === action.payload)

      if (task) {
        task.isDone = !task.isDone
      }
    },
    deleteTask: (state, action: PayloadAction<TaskId>) => {
      return state.filter((task) => task.id !== action.payload)
    },
    updateTask: (state, action: PayloadAction<TaskFields>) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
  },
})

export const { addTask, toggleTask, deleteTask, updateTask } = todoSlice.actions

export default todoSlice.reducer
