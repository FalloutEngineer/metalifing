import { Colors } from "@/constants/Colors"
import { Rarities } from "@/constants/Rarities"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function RarityItem(props: { rarityValue: Rarities }) {
  return (
    <View
      key={props.rarityValue}
      style={[
        styles.rarityItem,
        { borderColor: Colors.universal.rarities[props.rarityValue] },
      ]}
    >
      <Text style={styles.rarityText}>{props.rarityValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rarityItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minWidth: 50,

    borderWidth: 3,

    padding: 4,
  },
  rarityText: {
    color: "black",
  },
})
