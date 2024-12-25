import React, { useState } from "react"
import { View, Pressable, StyleSheet } from "react-native"
import { ScrollView } from "react-native"

type OnChangeCallback = (number: number) => void

export default function Selector({
  items,
  onChange,
  defaultValue,
  selectorStyles,
  listStyles,
  itemStyles,
}: {
  items: React.ReactNode[]
  onChange?: OnChangeCallback
  defaultValue?: number
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
    defaultValue && defaultValue < items.length ? defaultValue : 0
  )

  return (
    <ScrollView
      horizontal={true}
      style={selectorStylesArray}
      showsHorizontalScrollIndicator={false}
    >
      {itemsLength > 0 && (
        <View style={listStylesArray}>
          {items.map((item, index) => {
            const currentItemStyles = [...itemStylesArray]
            if (index === selected) currentItemStyles.push(styles.selected)
            return (
              <Pressable
                onPress={() => {
                  setSelected(index)
                  onChange && onChange(index)
                }}
                style={currentItemStyles}
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
