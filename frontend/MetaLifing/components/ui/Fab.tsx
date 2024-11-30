import { useThemeColor } from "@/hooks/useThemeColor"
import React from "react"
import { Pressable, Text, StyleSheet, useColorScheme } from "react-native"

export default function Fab({
  onPress,
  title,
}: {
  onPress: Function
  title: string
}) {
  const color = useThemeColor({}, "violet")

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      textAlignVertical: "center",
      display: "flex",
      borderRadius: 1000,
      position: "absolute",
      bottom: 70,
      right: 40,
      backgroundColor: color,
      height: 70,
      width: 70,
    },
    title: {
      fontSize: 46,
      lineHeight: 58,
      color: "white",
      fontWeight: "bold",
      display: "flex",
    },
  })
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPress()
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}
