import React from "react"
import { View, StyleSheet } from "react-native"

export default function Separator({ margin }: { margin: number }) {
  const styles = StyleSheet.create({
    separator: {
      height: 2,
      width: "100%",
      backgroundColor: "#EAEAEA",
      marginVertical: margin,
    },
  })

  return <View style={styles.separator} />
}
