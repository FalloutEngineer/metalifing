import { useThemeColor } from "@/hooks/useThemeColor"
import React, { PropsWithChildren } from "react"
import { Text, StyleSheet, Platform } from "react-native"

export default function Heading({
  children,
  fontSize = 40,
}: {
  children: React.ReactNode
  fontSize: number
}) {
  const textColor = useThemeColor({}, "text")

  const styles = StyleSheet.create({
    heading: {
      fontSize: fontSize,
      fontWeight: "bold",
      color: textColor,
      ...Platform.select({
        ios: { fontFamily: "Arial" },
        android: { fontFamily: "Roboto" },
      }),
    },
  })

  return <Text style={styles.heading}>{children}</Text>
}
