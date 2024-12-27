import React, { useState } from "react"
import { View, StyleSheet, FlatList, Dimensions } from "react-native"
import FilterBtn from "./FilterBtn"
import { FilterButton } from "./types"
import { Colors } from "@/constants/Colors"
import { useTasksStates } from "@/hooks/useTasksStates"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useDispatch } from "react-redux"
import { setState } from "@/redux/slices/filterState"

export default function FilterBar() {
  const taskFilterState = useSelector(
    (state: RootState) => state.taskFilter.state
  )

  const states = useTasksStates()

  const dispatch = useDispatch()

  function changeState(newState: number) {
    dispatch(setState(newState))
  }

  const data: FilterButton[] = [
    {
      label: "All",
      number: states.all,
      color: Colors.universal.ui.diamond,
      filter: () => {
        changeState(0)
      },
    },
    {
      label: "In Progress",
      number: states.inProgress,
      color: Colors.universal.ui.orange,
      filter: () => {
        changeState(1)
      },
    },
    {
      label: "Completed",
      number: states.completed,
      color: Colors.universal.ui.green,
      filter: () => {
        changeState(2)
      },
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
      renderItem={({ item, index }: { item: FilterButton; index: number }) => (
        <FilterBtn
          label={item.label}
          number={item.number}
          color={item.color}
          filter={item.filter}
          state={index === taskFilterState}
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
