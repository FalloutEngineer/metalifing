import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./slices/todos"

const store = configureStore({
  reducer: {
    todos: taskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
