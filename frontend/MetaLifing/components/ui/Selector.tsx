import React, { useState } from "react"
import { View, Pressable, StyleSheet } from "react-native"
import { ScrollView } from "react-native"

type OnChangeCallback = (number: number) => void

export default function Selector({
  items,
  onChange,
  initSelection,
  selectorStyles,
  listStyles,
  itemStyles,
}: {
  items: React.ReactNode[]
  onChange?: OnChangeCallback
  initSelection?: number
  selectorStyles?: Object
  listStyles?: Object
  itemStyles?: Object
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

  const itemStylesArray: Object[] = [styles.item]

  if (itemStyles) {
    itemStylesArray.push(itemStyles)
  }

  const [selected, setSelected] = useState<number>(
    initSelection && initSelection < items.length ? initSelection : 0
  )

  return (
    <ScrollView horizontal={true} style={selectorStylesArray}>
      {itemsLength > 0 && (
        <View style={listStylesArray}>
          {items.map((item, index) => {
            if (index === selected) itemStylesArray.push(styles.selected)
            return (
              <Pressable
                onPress={() => {
                  setSelected(index)
                  onChange && onChange(index)
                }}
                style={itemStylesArray}
                key={index}
              >
                {item}
              </Pressable>
            )
          })}
        </View>
      )}
    </ScrollView>
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
