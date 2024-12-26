import TaskForm from "@/components/forms/TaskForm"
import Header from "@/components/Header"
import { RootState } from "@/redux/store"
import { useLocalSearchParams, useRouter } from "expo-router"
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { updateTask } from "@/redux/slices/todos"
import { TaskFields } from "@/types"

export default function EditTask() {
  const { id } = useLocalSearchParams()

  const router = useRouter()

  const task = useSelector((state: RootState) =>
    state.todos.array.find((item) => item.id === id)
  )

  const dispatch = useDispatch()

  function editTask(newTask: TaskFields) {
    dispatch(updateTask(newTask))
    router.back()
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true}>Edit Task</Header>
      <TaskForm
        buttonName={"Submit changes"}
        buttonCallback={editTask}
        {...task}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
