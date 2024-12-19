import TaskForm from "@/components/forms/TaskForm"
import Header from "@/components/Header"
import { useLocalSearchParams } from "expo-router"
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

export default function EditTask() {
  const { id } = useLocalSearchParams()

  function editTask() {
    //TODO:
    console.log("task edited")
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true}>Edit Task</Header>
      <TaskForm buttonName={"Submit changes"} buttonCallback={editTask} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
