import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { OpaqueColorValue, Pressable } from "react-native"

export default function PressableIcon(props: {
  callback: Function
  icon: keyof typeof Ionicons.glyphMap
  size: number
  color: string | OpaqueColorValue | undefined
}) {
  return (
    <Pressable
      onPress={() => {
        props.callback()
      }}
    >
      <Ionicons size={props.size} name={props.icon} color={props.color} />
    </Pressable>
  )
}
