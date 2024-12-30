import { Rarities } from "@/constants/Rarities"
import { Item } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const defaultItem: Item = {
  id: "",
  name: "",
  amount: 0,
  price: 0,
  rarity: Rarities.COMMON,
}

export const createItemSlice = createSlice({
  name: "createItem",
  initialState: defaultItem,
  reducers: {
    setItem(state, action: PayloadAction<Item>) {
      state = { ...action.payload }
      return state
    },
    clearItem(state) {
      state = { ...defaultItem }
      return state
    },
  },
})

export const { setItem, clearItem } = createItemSlice.actions

export default createItemSlice.reducer
