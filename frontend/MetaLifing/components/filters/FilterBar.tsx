import React from "react"
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native"
import FilterBtn from "./FilterBtn"
import FilterButtonProps from "./types"
import { Colors } from "@/constants/Colors"
import { useTasksStates } from "@/hooks/useTasksStates"

export default function FilterBar() {
  const states = useTasksStates()

  console.log(states)

  const data: FilterButtonProps[] = [
    {
      label: "All",
      number: 0,
      color: Colors.universal.ui.diamond,
      filter: () => {
        console.log("All")
      },
      state: true,
    },
    {
      label: "In Progress",
      number: 0,
      color: Colors.universal.ui.orange,
      filter: () => {
        console.log("In Progress")
      },
      state: false,
    },
    {
      label: "Completed",
      number: 0,
      color: Colors.universal.ui.green,
      filter: () => {
        console.log("Completed")
      },
      state: false,
    },
  ]

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.bar}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
      renderItem={({ item }: { item: FilterButtonProps }) => (
        <FilterBtn
          label={item.label}
          number={item.number}
          color={item.color}
          filter={item.filter}
          state={item.state}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  bar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    overflow: "scroll",
    paddingVertical: 5,
    maxWidth: Dimensions.get("window").width - 15,
    height: "100%",
    maxHeight: 60,
  },
  separator: {
    width: 15,
  },
})
