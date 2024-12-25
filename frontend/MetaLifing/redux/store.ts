import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./slices/todos"
import createTodoReducer from "./slices/createTodo"

const store = configureStore({
  reducer: {
    todos: taskReducer,
    createTodo: createTodoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
