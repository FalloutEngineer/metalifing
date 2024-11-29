import React, { Children, PropsWithChildren } from "react"
import { Text, StyleSheet, Platform } from "react-native"

export default function Subheading({ children }: PropsWithChildren) {
  return <Text style={styles.subheading}>{children}</Text>
}

const styles = StyleSheet.create({
  subheading: {
    fontSize: 24,
    fontWeight: "regular",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
})
