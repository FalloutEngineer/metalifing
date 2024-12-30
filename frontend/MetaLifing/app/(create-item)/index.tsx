import ItemForm from "@/components/forms/ItemForm"
import Header from "@/components/Header"
import { Rarities } from "@/constants/Rarities"
import { clearItem, setItem } from "@/redux/slices/createItem"
import { addItem } from "@/redux/slices/items"
import { RootState } from "@/redux/store"
import { Item, TaskFields } from "@/types"
import { useRouter } from "expo-router"
import { useState } from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"

export default function index() {
  const item = useSelector((state: RootState) => state.createItem)
  const dispatch = useDispatch()

  const router = useRouter()

  function createItem(item: Item) {
    dispatch(addItem(item))
    dispatch(clearItem())
    router.back()
  }

  function updateGlobalCreateItemState(item: Item) {
    dispatch(setItem(item))
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true} fontSize={26}>
        <Text>Create item</Text>
      </Header>
      <ItemForm
        buttonName={"Create"}
        buttonCallback={createItem}
        globalStateCallback={updateGlobalCreateItemState}
        {...item}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
