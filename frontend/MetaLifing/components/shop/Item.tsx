import React, { Fragment, ReactElement } from "react"
import { View, Text, StyleSheet } from "react-native"
import ItemButton from "./ItemButton"
import Coins from "../Coins"
import { Rarities } from "@/constants/Rarities"
import { useRarityColor } from "@/hooks/useRarityColor"
import DeleteBtn from "../ui/DeleteBtn"

export default function Item(props: {
  id: string
  price: number
  amount?: number
  rarity?: Rarities
  name: string
  fontSize: number
  buttons: ReactElement<typeof ItemButton> | ReactElement<typeof ItemButton>[]
  createdBySystem?: boolean
  deleteCallback?: Function
}) {
  const rarityColor = useRarityColor(props.rarity || Rarities.COMMON)

  const styles = StyleSheet.create({
    item: {
      display: "flex",
      flexGrow: 1,
      flex: 1,

      overflow: "hidden",

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
    },
    header: {
      flex: 1.5,

      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",

      flexDirection: "row",
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
      display: "flex",
    },
    lower: {
      flex: 2,
      display: "flex",
      width: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      justifyContent: "space-between",
      alignContent: "flex-start",
      flexDirection: "row",
    },
    amount: {
      fontSize: 18,
    },
    rarity: {
      height: 5,
      width: "100%",
    },
    wrapper: {
      paddingHorizontal: 5,
      paddingBottom: 5,
      display: "flex",
      flexGrow: 1,
      flex: 1,

      width: "100%",
      height: "100%",
    },
  })

  return (
    <View style={styles.item}>
      <View style={[styles.rarity, { backgroundColor: rarityColor }]}></View>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text>
            {props.createdBySystem ? null : (
              <DeleteBtn
                deleteCallback={() => {
                  if (props.deleteCallback) {
                    props.deleteCallback(props.id)
                  }
                }}
              />
            )}
          </Text>
          <Text style={styles.amount}>x{props.amount ? props.amount : 0}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>{props.name}</Text>
        </View>
        <View style={styles.lower}>
          <Coins coins={props.price} fontSize={18} />
          <View style={styles.buttons}>
            {Array.isArray(props.buttons)
              ? props.buttons.map((child, index) => (
                  <Fragment key={index}>{child}</Fragment>
                ))
              : props.buttons}
          </View>
        </View>
      </View>
    </View>
  )
}
