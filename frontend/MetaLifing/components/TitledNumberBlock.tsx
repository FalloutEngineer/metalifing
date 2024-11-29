import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"

export default function TitledNumberBlock({
  number,
  name,
  color,
  type,
}: {
  number: number
  name: string
  color: string
  type: "square" | "long"
}) {
  const styles = StyleSheet.create({
    box: {
      backgroundColor: color,
      borderRadius: 12,
      padding: 12,
      display: "flex",
    },
    square: {
      width: "48%",
      aspectRatio: 1,
    },
    long: {
      width: "100%",
      height: "100%",
      maxHeight: 130,
    },
    number: {
      fontSize: 40,
      fontWeight: "bold",
      ...Platform.select({
        ios: { fontFamily: "Arial" },
        android: { fontFamily: "Roboto" },
      }),
      color: "white",
    },
    name: {
      fontSize: 24,
      fontWeight: "light",
      color: "white",
      ...Platform.select({
        ios: { fontFamily: "Arial" },
        android: { fontFamily: "Roboto" },
      }),
    },
  })

  let formattedNumber

  if (type === "square") {
    if (number > 999999) {
      formattedNumber = "999 999"
    } else {
      formattedNumber = Intl.NumberFormat("uk-UA").format(number)
    }
  } else {
    if (number > 9999999999999) {
      formattedNumber = "9 999 999 999 999"
    } else {
      formattedNumber = Intl.NumberFormat("uk-UA").format(number)
    }
  }

  const viewStyle = type === "square" ? styles.square : styles.long

  return (
    <View style={[styles.box, viewStyle]}>
      <Text style={styles.number}>{formattedNumber}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}
