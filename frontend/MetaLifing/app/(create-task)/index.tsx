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

export default function index() {
  function createTask() {
    //TODO:
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true} fontSize={26}>
        <Text>Create task</Text>
      </Header>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollableViewContent: {
    paddingBottom: 15,
  },
  inputGroup: {},
  scrollableView: {},
  inputLineGroup: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  numberInput: {
    width: 75,
    textAlign: "center",
    fontSize: 24,
  },
  diamondIconWrapper: {
    display: "flex",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 7,
    padding: 7,
  },
  inputHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputsWrapper: {
    display: "flex",
    gap: 15,
    marginTop: 15,
  },
  submitWrapper: {
    width: "50%",
    marginTop: 25,
  },
  dateGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",

    gap: 15,
  },
})
