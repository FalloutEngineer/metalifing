import { combineReducers, configureStore } from "@reduxjs/toolkit"
import taskReducer from "./slices/todos"
import createTodoReducer from "./slices/createTodo"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistReducer } from "redux-persist"
import persistStore from "redux-persist/es/persistStore"
import coinsReducer from "./slices/coins"

const persistConfig = {
  key: "todos",
  storage: AsyncStorage,
}

const persistCoinsConfig = {
  key: "coins",
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  todos: persistReducer(persistConfig, taskReducer),
  createTodo: createTodoReducer,
  coins: persistReducer(persistCoinsConfig, coinsReducer),
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
