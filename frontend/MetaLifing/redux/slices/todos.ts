import { Difficulties, Priorities } from "@/constants/TaskAttributes"
import { TaskFields, TaskId } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TaskFields[] = [
  {
    id: "123",
    name: "Homework",
    description: "Do homework",
    difficulty: Difficulties.EASY,
    priority: Priorities.LOW,
    tag: "Learning",
    tagColor: "red",
    reward: 5,
    dateAndTime: new Date("22-12-2024").toString(),
    isDone: false,
  },
]

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskFields>) => {
      state.push({ ...action.payload, id: new Date().toString() })
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
