import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, Pressable } from "react-native"

export default function DeleteBtn(props: { deleteCallback: Function }) {
  return (
    <Pressable onPress={() => props.deleteCallback()} style={{ height: 16 }}>
      <Ionicons name="trash" size={16} color="black" />
    </Pressable>
  )
}
