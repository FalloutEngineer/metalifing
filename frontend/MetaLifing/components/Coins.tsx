import { Colors } from "@/constants/Colors"
import { useThemeColor } from "@/hooks/useThemeColor"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"

export default function Coins({
  coins,
  fontSize,
}: {
  coins: number
  fontSize?: number
}) {
  let formattedNumber

  if (coins > 999999999) {
    formattedNumber = "999 999 999"
  } else {
    formattedNumber = Intl.NumberFormat("uk-UA").format(coins)
  }

  const textColor = useThemeColor({}, "text")

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
    },
    number: {
      fontSize: fontSize || 20,
      fontWeight: "light",
      color: textColor,
      ...Platform.select({
        ios: { fontFamily: "Arial" },
        android: { fontFamily: "Roboto" },
      }),
    },
    coin: {
      height: fontSize || 20,
      width: fontSize || 20,
      borderRadius: 9999,
      backgroundColor: "#FFDF0E",
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{formattedNumber}</Text>
      <Ionicons
        size={fontSize ? fontSize - 2 : 18}
        color={Colors.universal.ui.diamond}
        style={[{ marginBottom: -3 }]}
        name={"diamond-outline"}
      />
    </View>
  )
}
