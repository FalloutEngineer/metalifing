import { FilterState, TaskFilter } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: FilterState = {
  state: 0,
}

const taskFilterSlice = createSlice({
  name: "taskFilter",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<TaskFilter>) => {
      if (state.state >= 0 && state.state <= 2) {
        state.state = action.payload
      }
      return state
    },
  },
})

export const { setState } = taskFilterSlice.actions

export default taskFilterSlice.reducer
