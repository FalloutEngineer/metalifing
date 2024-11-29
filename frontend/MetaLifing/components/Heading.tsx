import React, { PropsWithChildren } from "react"
import { Text, StyleSheet, Platform } from "react-native"

export default function Heading({ children }: PropsWithChildren) {
  return <Text style={styles.heading}>{children}</Text>
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
})
