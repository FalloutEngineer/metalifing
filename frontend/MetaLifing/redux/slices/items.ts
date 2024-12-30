import { Rarities } from "@/constants/Rarities"
import { Item, ItemAmountPayload, ItemStoreState } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ItemStoreState = {
  inventory: [
    {
      id: "1",
      name: "Healing potion",
      amount: 0,
      price: 10,
      rarity: Rarities.COMMON,
      createdBySystem: true,
    },
    {
      id: "2",
      name: "Mana potion",
      amount: 0,
      price: 15,
      rarity: Rarities.COMMON,
      createdBySystem: true,
    },
    {
      id: "3",
      name: "Speed potion",
      amount: 0,
      price: 20,
      rarity: Rarities.COMMON,
      createdBySystem: true,
    },
    {
      id: "4",
      name: "Invisibility potion",
      amount: 0,
      price: 100,
      rarity: Rarities.COMMON,
      createdBySystem: true,
    },
    {
      id: "5",
      name: "Iron armor",
      amount: 0,
      price: 500,
      rarity: Rarities.RARE,
      createdBySystem: true,
    },
  ],
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
        if (state.inventory[index].amount + action.payload.amount < 0) {
          state.inventory[index].amount = 0
        } else {
          state.inventory[index].amount =
            state.inventory[index].amount + action.payload.amount
        }
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
    deleteItem: (state, action: PayloadAction<Item>) => {
      state.inventory = state.inventory.filter((item) => {
        return item.createdBySystem || item.id !== action.payload.id
      })
    },
  },
})

export const { addItem, changeAmountBy, updateItem, deleteItem } =
  itemsSlice.actions

export default itemsSlice.reducer
