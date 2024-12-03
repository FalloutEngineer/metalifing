import React, { useState } from "react"
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native"

type OnChangeCallback = (number: number) => void

export default function Selector({
  items,
  onChange,
  initSelection,
  selectorStyles,
  listStyles,
}: {
  items: React.ReactNode[]
  onChange?: OnChangeCallback
  initSelection?: number
  selectorStyles?: Object
  listStyles?: Object
}) {
  const itemsLength = items.length

  const listStylesArray: Object[] = [styles.list]
  if (listStyles) {
    listStylesArray.push(listStyles)
  }

  const selectorStylesArray: Object[] = [styles.selector]

  if (selectorStyles) {
    selectorStylesArray.push(selectorStyles)
  }

  const [selected, setSelected] = useState<number>(
    initSelection && initSelection < items.length ? initSelection : 0
  )

  return (
    <View style={selectorStylesArray}>
      {itemsLength > 0 && (
        <View style={listStylesArray}>
          {items.map((item, index) => {
            const itemStyles: any[] = [styles.item]
            if (index === selected) itemStyles.push(styles.selected)
            return (
              <Pressable
                onPress={() => {
                  setSelected(index)
                  onChange && onChange(index)
                }}
                style={itemStyles}
                key={index}
              >
                {item}
              </Pressable>
            )
          })}
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  selector: {},
  list: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    borderColor: "transparent",
    borderWidth: 4,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
  },
  selected: {
    borderColor: "#b5b5b5",
  },
})
