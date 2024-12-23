import { Colors } from "@/constants/Colors"
import { Difficulties, Priorities } from "@/constants/TaskAttributes"
import { TaskFields } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const defaultTask: TaskFields = {
  id: "",
  name: "",
  description: "",
  difficulty: Difficulties.EASY,
  priority: Priorities.LOW,
  tag: "Learning",
  tagColor: Colors.universal.ui.green,
  reward: 0,
  dateAndTime: new Date().toString(),
  isDone: false,
}

const initialState: TaskFields = { ...defaultTask }

const createTodoSlice = createSlice({
  name: "createTodo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<TaskFields>) => {
      state = action.payload
    },
    clearTodo: (state) => {
      state = { ...defaultTask }
    },
  },
})

export const { setTodo, clearTodo } = createTodoSlice.actions

export default createTodoSlice.reducer
