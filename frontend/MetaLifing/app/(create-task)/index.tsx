import Header from "@/components/Header"
import Selector from "@/components/ui/Selector"
import Tag from "@/components/ui/Tag"
import { TagType } from "@/components/ui/TagStyles"
import { Colors } from "@/constants/Colors"
import { LayoutStyles } from "@/styles/layout"
import { Ionicons } from "@expo/vector-icons"
import React, { useState } from "react"
import { Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import TimePicker from "@/components/ui/TimePicker"
import TaskForm from "@/components/forms/TaskForm"
import { TaskFields } from "@/types"

import { useDispatch } from "react-redux"
import { addTask } from "@/redux/slices/todos"

export default function index() {
  const dispatch = useDispatch()

  function createTask(task: TaskFields) {
    console.log(task)

    dispatch(addTask(task))
    //TODO:
    console.log("Created", task)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true} fontSize={26}>
        <Text>Create task</Text>
      </Header>
      <TaskForm buttonName={"Create"} buttonCallback={createTask}></TaskForm>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
