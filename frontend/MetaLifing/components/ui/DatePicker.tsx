import { Colors } from "@/constants/Colors"
import { getFriendlyDate } from "@/util/functions"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

export default function DatePicker(props: { date: Date; onPress?: Function }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (props.onPress) {
          props.onPress()
        }
      }}
    >
      <Text style={styles.date}>{getFriendlyDate(props.date)}</Text>
      <View style={styles.iconContainer}>
        <Ionicons
          size={24}
          color={Colors.universal.ui.gray}
          name={"calendar-outline"}
        />
      </View>
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
  date: {
    fontSize: 24,
  },
  iconContainer: {
    display: "flex",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
})
