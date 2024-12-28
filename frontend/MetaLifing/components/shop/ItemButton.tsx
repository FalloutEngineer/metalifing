import React from "react"
import { Pressable, Text } from "react-native"

export default function ItemButton() {
  const pressHandler = () => {
    console.log("button pressed")
  }

  return (
    <Pressable onPress={pressHandler}>
      <Text>ItemButton</Text>
    </Pressable>
  )
}
