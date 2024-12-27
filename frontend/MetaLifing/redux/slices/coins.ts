import { Coins, CoinsInitialState } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CoinsInitialState = {
  value: 0,
}

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    addCoins: (state, action: PayloadAction<Coins>) => {
      state.value = state.value + action.payload
      return state
    },
    subtractCoins: (state, action: PayloadAction<Coins>) => {
      state.value = state.value - action.payload
      return state
    },
  },
})

export const { addCoins, subtractCoins } = coinsSlice.actions

export default coinsSlice.reducer
