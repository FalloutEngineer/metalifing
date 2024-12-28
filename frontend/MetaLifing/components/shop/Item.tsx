import React, { Fragment, ReactElement, ReactNode } from "react"
import { View, Text, StyleSheet } from "react-native"
import ItemButton from "./ItemButton"
import Coins from "../Coins"

export default function Item(props: {
  price: number
  name: string
  fontSize: number
  buttons: ReactElement<typeof ItemButton> | ReactElement<typeof ItemButton>[]
}) {
  const styles = StyleSheet.create({
    item: {
      display: "flex",
      flexGrow: 1,
      flex: 1,

      width: "100%",
      height: "100%",

      backgroundColor: "white",

      borderRadius: 3,

      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.17,
      shadowRadius: 3.05,
      elevation: 4,

      padding: 5,
    },
    header: {
      flex: 2,

      width: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
      display: "flex",
    },
    body: {
      flex: 3,

      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontSize: props.fontSize,
    },
    buttons: {
      flex: 2,

      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  })

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Coins coins={props.price} fontSize={18} />
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={styles.buttons}>
        {Array.isArray(props.buttons)
          ? props.buttons.map((child, index) => (
              <Fragment key={index}>{child}</Fragment>
            ))
          : props.buttons}
      </View>
    </View>
  )
}
