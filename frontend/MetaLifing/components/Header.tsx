import React, { useState } from "react"
import { Pressable, View, Text, StyleSheet, StatusBar } from "react-native"
import Heading from "./Heading"
import Coins from "./Coins"
import { LayoutStyles } from "@/styles/layout"
import { useRouter } from "expo-router"
import { useThemeColor } from "@/hooks/useThemeColor"
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function Header({
  children,
  isReturnButtonActive,
  fontSize = 26,
}: {
  children: React.ReactNode
  isReturnButtonActive?: boolean
  fontSize?: number
}) {
  const coinsStore = useSelector((state: RootState) => state.coins)
  const coins = coinsStore.value

  const bgColor = useThemeColor({}, "background")
  const textColor = useThemeColor({}, "text")

  const styles = StyleSheet.create({
    returnButton: {
      fontSize: 36,
      width: 36,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      backgroundColor: bgColor,
      height: 45,
    },
    headerGroup: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
  })

  const router = useRouter()

  return (
    <View style={styles.header}>
      <StatusBar backgroundColor={bgColor} />
      <View style={styles.headerGroup}>
        {isReturnButtonActive ? (
          <Pressable
            onPress={() => {
              router.back()
            }}
          >
            <View style={styles.returnButton}>
              <Ionicons
                size={28}
                style={[{ marginBottom: -3 }, { color: textColor }]}
                name={"arrow-back"}
              />
            </View>
          </Pressable>
        ) : (
          <View style={styles.returnButton} />
        )}
        <Heading fontSize={fontSize}>{children}</Heading>
      </View>

      <Coins coins={coins} />
    </View>
  )
}
