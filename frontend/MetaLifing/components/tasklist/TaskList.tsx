import React from "react"
import { View, FlatList, StyleSheet, Text } from "react-native"
import TaskItem from "./TaskItem"

import useFilteredTasks from "@/hooks/useFilteredTasks"

export default function TaskList() {
  const filteredTasks = useFilteredTasks()

  return (
    <FlatList
      data={filteredTasks}
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
