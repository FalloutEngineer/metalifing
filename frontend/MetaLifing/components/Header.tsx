import React, { useState } from "react"
import { Pressable, View, Text, StyleSheet } from "react-native"
import Heading from "./Heading"
import Coins from "./Coins"
import { LayoutStyles } from "@/styles/layout"
import { useRouter } from "expo-router"

export default function Header({
  children,
  isReturnButtonActive,
}: {
  children: React.ReactNode
  isReturnButtonActive?: boolean
}) {
  const [coins, setCoins] = useState(999999998)

  const styles = StyleSheet.create({
    returnButton: {
      fontSize: 36,
    },
  })

  const router = useRouter()
  return (
    <View style={LayoutStyles.header}>
      {isReturnButtonActive && (
        <Pressable
          onPress={() => {
            router.back()
          }}
        >
          <Text style={styles.returnButton}>&lt;- </Text>
        </Pressable>
      )}
      <Heading>{children}</Heading>
      <Coins coins={coins} />
    </View>
  )
}
