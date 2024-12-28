import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Pressable, StyleSheet } from "react-native"

export default function ItemButton(props: { callback: Function }) {
  const pressHandler = () => {
    props.callback()
  }

  return (
    <Pressable onPress={pressHandler} style={styles.buttonStyle}>
      <Ionicons
        size={25}
        style={[
          {
            marginBottom: -3,
          },
        ]}
        name={"wallet-outline"}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    display: "flex",
    flex: 1,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
})
