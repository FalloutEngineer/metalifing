import ItemForm from "@/components/forms/ItemForm"
import Header from "@/components/Header"
import { Rarities } from "@/constants/Rarities"
import { RootState } from "@/redux/store"
import { Item, TaskFields } from "@/types"
import { useState } from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"

export default function index() {
  // const items = useSelector((state: RootState) => state.items.inventory)

  const [item, setItem] = useState<Item>({
    id: "0",
    name: "test",
    amount: 0,
    price: 1,
    rarity: Rarities.COMMON,
  })

  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true} fontSize={26}>
        <Text>Create item</Text>
      </Header>
      <ItemForm
        buttonName={"Create"}
        buttonCallback={function (task: Item) {
          console.log("placeholder")
        }}
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
