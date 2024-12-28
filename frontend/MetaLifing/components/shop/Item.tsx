import React from "react"
import { View, Text, StyleSheet } from "react-native"
import ItemButton from "./ItemButton"

export default function Item() {
  return (
    <View>
      <View style={styles.header}>
        <Text>$Price</Text>
      </View>
      <View style={styles.body}>
        <Text>$ItemName</Text>
      </View>
      <View style={styles.buttons}>
        <ItemButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {},
  body: {},
  buttons: {},
})
