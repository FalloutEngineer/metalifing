import React, { useState } from "react"
import { View, Text, StyleSheet, Platform, Pressable } from "react-native"
import FilterButtonProps from "./types"

export default function FilterBtn<Filter>({
  label,
  number,
  color,
  filter,
  state,
}: FilterButtonProps) {
  return (
    <Pressable
      onPress={() => {
        filter()
      }}
      style={[styles.btn, state ? styles.btnActive : styles.btnInactive]}
    >
      <View style={styles.labelWrapper}>
        <Text
          style={[styles.text, state ? { color: "white" } : { color: "black" }]}
        >
          {label}
        </Text>
      </View>
      <View style={[styles.numberWrapper, { backgroundColor: color }]}>
        <Text style={[styles.text, { color: "white" }]}>{number}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 11,
    borderRadius: 35,
    width: "auto",
  },
  btnActive: {
    backgroundColor: "black",
  },
  btnInactive: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  labelWrapper: {
    display: "flex",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 22,
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  numberWrapper: {
    minWidth: 50,
    width: "auto",
    height: 35,
    borderRadius: 35,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
})
