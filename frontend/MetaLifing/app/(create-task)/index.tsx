import Header from "@/components/Header"
import Selector from "@/components/ui/Selector"
import Tag from "@/components/ui/Tag"
import { TagType } from "@/components/ui/TagStyles"
import { Colors } from "@/constants/Colors"
import { LayoutStyles } from "@/styles/layout"
import { Ionicons } from "@expo/vector-icons"
import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  useColorScheme,
  ScrollView,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker"
import DatePicker from "@/components/ui/DatePicker"
import TimePicker from "@/components/ui/TimePicker"
import TaskForm from "@/components/forms/TaskForm"
import { Difficulties, Priorities } from "@/constants/TaskAttributes"

export default function index() {
  function createTask() {
    //TODO:
    console.log("task created")
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
