import { Difficulties, Priorities } from "@/constants/TaskAttributes"
import React, { useEffect } from "react"
import { View, FlatList, StyleSheet, Text } from "react-native"
import TaskItem from "./TaskItem"

import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@/redux/store"
import { toggleTask } from "@/redux/slices/todos"

export default function TaskList() {
  // const [tasks, setTasks] = useState<TaskFields[]>([])

  const tasks = useSelector((state: RootState) => state.todos)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {}, [])

  // const tasks: TaskFields[] = [
  //   {
  //     id: "wash_the_dishes",
  //     label: "Wash the dishes",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.EASY,
  //     priority: Priorities.LOW,
  //     tag: "Chores",
  //     tagColor: Colors.universal.ui.gray,
  //   },
  //   {
  //     id: "do_homework",
  //     label: "Do homework",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.NORMAL,
  //     priority: Priorities.HIGH,
  //     tag: "Study",
  //     tagColor: Colors.universal.ui.diamond,
  //   },
  //   {
  //     id: "do_homework1",
  //     label: "Do homework",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.NORMAL,
  //     priority: Priorities.HIGH,
  //     tag: "Study",
  //     tagColor: Colors.universal.ui.diamond,
  //   },
  //   {
  //     id: "do_homework2",
  //     label: "Do homework",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.NORMAL,
  //     priority: Priorities.HIGH,
  //     tag: "Study",
  //     tagColor: Colors.universal.ui.diamond,
  //   },
  //   {
  //     id: "do_homework3",
  //     label: "Do homework",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.NORMAL,
  //     priority: Priorities.HIGH,
  //     tag: "Study",
  //     tagColor: Colors.universal.ui.diamond,
  //   },
  //   {
  //     id: "do_homework4",
  //     label: "Do homework",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.NORMAL,
  //     priority: Priorities.HIGH,
  //     tag: "Study",
  //     tagColor: Colors.universal.ui.diamond,
  //   },
  //   {
  //     id: "do_homework5",
  //     label: "Do homework",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.NORMAL,
  //     priority: Priorities.HIGH,
  //     tag: "Study",
  //     tagColor: Colors.universal.ui.diamond,
  //   },
  //   {
  //     id: "do_homework6",
  //     label: "Do homework",
  //     reward: 99,
  //     date: "18-11-2024",
  //     difficulty: Difficulties.NORMAL,
  //     priority: Priorities.HIGH,
  //     tag: "Study",
  //     tagColor: Colors.universal.ui.diamond,
  //   },
  // ]

  return (
    // <Text>Hello</Text>
    <FlatList
      data={tasks}
      style={styles.taskList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.footer} />}
      renderItem={({ item }) => (
        <TaskItem
          id={item.id}
          label={item.name}
          reward={item.reward}
          date={item.dateAndTime}
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
  taskList: { height: "80%" },
  separator: { height: 15 },
  footer: { height: 30 },
})
