import { useThemeColor } from "@/hooks/useThemeColor"
import { Href, Link } from "expo-router"
import React from "react"
import { Pressable, Text, StyleSheet } from "react-native"

export default function RedirectFab({
  href,
  title,
}: {
  href: Href
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
    <Link style={styles.container} href={href}>
      <Text style={styles.title}>{title}</Text>
    </Link>
  )
}
