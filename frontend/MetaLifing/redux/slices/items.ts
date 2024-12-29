import { Item, ItemAmountPayload, ItemStoreState } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ItemStoreState = {
  inventory: [],
}

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.inventory.push(action.payload)
    },
    changeAmountBy: (state, action: PayloadAction<ItemAmountPayload>) => {
      const index = state.inventory.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index !== -1) {
        state.inventory[index].amount =
          state.inventory[index].amount + action.payload.amount
      }
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.inventory.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index !== -1) {
        state.inventory[index] = { ...action.payload }
      }
    },
  },
})

export const { addItem, changeAmountBy, updateItem } = itemsSlice.actions

export default itemsSlice.reducer
