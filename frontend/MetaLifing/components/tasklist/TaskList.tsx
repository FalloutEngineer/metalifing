import { Difficulties, Priorities } from "@/constants/TaskAttributes"
import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import TaskProps from "./types"
import TaskItem from "./TaskItem"
import { Colors } from "@/constants/Colors"

export default function TaskList() {
  const tasks: TaskProps[] = [
    {
      id: "wash_the_dishes",
      label: "Wash the dishes",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.EASY,
      priority: Priorities.LOW,
      tag: "Chores",
      tagColor: Colors.universal.ui.orange,
    },
    {
      id: "do_homework",
      label: "Do homework",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.NORMAL,
      priority: Priorities.HIGH,
      tag: "Study",
      tagColor: Colors.universal.ui.diamond,
    },
    {
      id: "do_homework",
      label: "Do homework",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.NORMAL,
      priority: Priorities.HIGH,
      tag: "Study",
      tagColor: Colors.universal.ui.diamond,
    },
    {
      id: "do_homework",
      label: "Do homework",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.NORMAL,
      priority: Priorities.HIGH,
      tag: "Study",
      tagColor: Colors.universal.ui.diamond,
    },
    {
      id: "do_homework",
      label: "Do homework",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.NORMAL,
      priority: Priorities.HIGH,
      tag: "Study",
      tagColor: Colors.universal.ui.diamond,
    },
    {
      id: "do_homework",
      label: "Do homework",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.NORMAL,
      priority: Priorities.HIGH,
      tag: "Study",
      tagColor: Colors.universal.ui.diamond,
    },
    {
      id: "do_homework",
      label: "Do homework",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.NORMAL,
      priority: Priorities.HIGH,
      tag: "Study",
      tagColor: Colors.universal.ui.diamond,
    },
    {
      id: "do_homework",
      label: "Do homework",
      reward: 99,
      date: "18-11-2024",
      difficulty: Difficulties.NORMAL,
      priority: Priorities.HIGH,
      tag: "Study",
      tagColor: Colors.universal.ui.diamond,
    },
  ]

  return (
    <FlatList
      data={tasks}
      style={styles.taskList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <TaskItem
          id={item.id}
          label={item.label}
          reward={item.reward}
          date={item.date}
          difficulty={item.difficulty}
          priority={item.priority}
          tag={item.tag}
          tagColor={item.tagColor}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  taskList: {},
  separator: { height: 15 },
})