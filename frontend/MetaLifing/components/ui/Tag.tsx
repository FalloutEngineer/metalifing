import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"
import { TagType } from "./TagStyles"

export default function Tag({
  text,
  color,
  type,
}: {
  text: string
  color: string
  type: TagType
}) {
  return (
    <View
      style={[
        styles.tag,
        type === TagType.SOLID
          ? { backgroundColor: color }
          : { borderStyle: "solid", borderWidth: 1, borderColor: color },
      ]}
    >
      <Text
        style={[
          styles.text,
          type === TagType.SOLID ? { color: "white" } : { color: "black" },
        ]}
      >
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 50,
    height: 30,
    display: "flex",
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
})
