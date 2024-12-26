import React from "react"
import { View, FlatList, StyleSheet, Text } from "react-native"
import TaskItem from "./TaskItem"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.todos)

  return (
    <FlatList
      data={tasks.array}
      style={styles.taskList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.footer} />}
      renderItem={({ item }) => (
        <TaskItem
          id={item.id}
          name={item.name}
          reward={item.reward}
          dateAndTime={item.dateAndTime}
          difficulty={item.difficulty}
          priority={item.priority}
          tag={item.tag}
          tagColor={item.tagColor}
          isDone={item.isDone}
          description={item.description}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  taskList: { height: "80%" },
  separator: { height: 15 },
  footer: { height: 30 },
})
