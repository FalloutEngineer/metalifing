import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"

export default function Coins({ coins }: { coins: number }) {
  let formattedNumber

  if (coins > 999999999) {
    formattedNumber = "999 999 999"
  } else {
    formattedNumber = Intl.NumberFormat("uk-UA").format(coins)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{formattedNumber}</Text>
      <Ionicons
        size={18}
        color={Colors.universal.ui.diamond}
        style={[{ marginBottom: -3 }]}
        name={"diamond-outline"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  number: {
    fontSize: 20,
    fontWeight: "light",
    color: "black",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  coin: {
    height: 20,
    width: 20,
    borderRadius: 9999,
    backgroundColor: "#FFDF0E",
  },
})
