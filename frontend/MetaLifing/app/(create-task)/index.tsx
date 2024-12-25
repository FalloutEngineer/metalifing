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

import TaskForm from "@/components/forms/TaskForm"
import { TaskFields } from "@/types"

import { useDispatch, useSelector } from "react-redux"
import { addTask } from "@/redux/slices/todos"
import { setTodo, clearTodo } from "@/redux/slices/createTodo"
import { RootState } from "@/redux/store"
import { useRouter } from "expo-router"

export default function index() {
  const todo = useSelector((state: RootState) => state.createTodo)
  const dispatch = useDispatch()

  const router = useRouter()

  function createTask(task: TaskFields) {
    dispatch(addTask(task))
    dispatch(clearTodo())
    router.back()
    //TODO:
    console.log("Created", task)
  }

  function updateGlobalCreateTaskState(task: TaskFields) {
    dispatch(setTodo(task))
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true} fontSize={26}>
        <Text>Create task</Text>
      </Header>
      <TaskForm
        buttonName={"Create"}
        buttonCallback={createTask}
        globalStateCallback={updateGlobalCreateTaskState}
        {...todo}
      ></TaskForm>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
