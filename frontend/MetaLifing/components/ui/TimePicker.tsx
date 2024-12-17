import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

export default function TimePicker(props: { date: Date; onPress?: Function }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (props.onPress) {
          props.onPress()
        }
      }}
    >
      <Text style={styles.hours}>
        {props.date.getHours()}:
        {props.date.getMinutes() < 10
          ? "0" + props.date.getMinutes()
          : props.date.getMinutes()}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",

    gap: 8,

    padding: 7,
    borderRadius: 7,

    backgroundColor: "white",
  },
  hours: {
    fontSize: 24,
  },
  iconContainer: {
    display: "flex",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
})
