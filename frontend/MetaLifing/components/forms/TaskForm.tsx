import { LayoutStyles } from "@/styles/layout"
import { TaskFormProps } from "@/types"
import React, { useState } from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  useColorScheme,
} from "react-native"
import Selector from "../ui/Selector"
import Tag from "../ui/Tag"
import { Colors } from "@/constants/Colors"
import { TagType } from "../ui/TagStyles"
import { Ionicons } from "@expo/vector-icons"
import TimePicker from "../ui/TimePicker"
import DatePicker from "../ui/DatePicker"
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker"

export default function TaskForm(props: TaskFormProps) {
  const [taskDate, setTaskDate] = useState<Date>(
    props.dateAndTime || new Date()
  )

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
  const [datePickerMode, setDatePickerMode] = useState<"time" | "date">("date")

  const colorScheme = useColorScheme()

  function showDatePickerCallback() {
    setDatePickerMode("date")
    setShowDatePicker(true)
  }

  function showTimePickerCallback() {
    setDatePickerMode("time")
    setShowDatePicker(true)
  }

  function onDateChange(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) {
    const currentDate = selectedDate

    setShowDatePicker(false)
    if (currentDate) {
      setTaskDate(currentDate)
    }
  }

  return (
    <>
      <ScrollView
        style={[LayoutStyles.mainView, styles.scrollableView]}
        contentContainerStyle={styles.scrollableViewContent}
      >
        <View style={styles.inputsWrapper}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Task name</Text>
            <TextInput
              style={styles.input}
              placeholder="Wash the dishes..."
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Task description</Text>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              placeholder={
                "Take the dishes from the table, place into the sink and turn on water..."
              }
              style={styles.input}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Difficulty</Text>
            <Selector
              itemStyles={{ borderRadius: 100 }}
              items={[
                <Tag
                  text={"Easy"}
                  color={Colors.universal.difficulties.easy}
                  type={TagType.SOLID}
                />,
                <Tag
                  text={"Normal"}
                  color={Colors.universal.difficulties.normal}
                  type={TagType.SOLID}
                />,
                <Tag
                  text={"Hard"}
                  color={Colors.universal.difficulties.hard}
                  type={TagType.SOLID}
                />,
                <Tag
                  text={"Nightmare"}
                  color={Colors.universal.difficulties.nightmare}
                  type={TagType.SOLID}
                />,
              ]}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Priority</Text>
            <Selector
              itemStyles={{ borderRadius: 100 }}
              items={[
                <Tag
                  text={"Low"}
                  color={Colors.universal.priorities.low}
                  type={TagType.SOLID}
                />,
                <Tag
                  text={"Medium"}
                  color={Colors.universal.priorities.medium}
                  type={TagType.SOLID}
                />,
                <Tag
                  text={"High"}
                  color={Colors.universal.priorities.high}
                  type={TagType.SOLID}
                />,
              ]}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Tag</Text>
            <Selector
              itemStyles={{ borderRadius: 100 }}
              items={[
                <Tag
                  text={"Learning"}
                  color={Colors.universal.priorities.low}
                  type={TagType.OUTLINE}
                />,
                <Tag
                  text={"Chores"}
                  color={Colors.universal.ui.gray}
                  type={TagType.OUTLINE}
                />,
                <Tag
                  text={"Work"}
                  color={Colors.universal.ui.orange}
                  type={TagType.OUTLINE}
                />,
                <Tag
                  text={"Health"}
                  color={Colors.universal.ui.red}
                  type={TagType.OUTLINE}
                />,
                <Tag
                  text={"Other"}
                  color={Colors.universal.ui.violet}
                  type={TagType.OUTLINE}
                />,
              ]}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Reward</Text>
            <View style={styles.inputLineGroup}>
              <TextInput
                keyboardType="numeric"
                editable
                maxLength={3}
                placeholder={"0"}
                style={[styles.input, styles.numberInput]}
              />
              <View style={styles.diamondIconWrapper}>
                <Ionicons
                  size={18}
                  color={Colors.universal.ui.diamond}
                  style={[{ marginBottom: -3 }]}
                  name={"diamond-outline"}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Task date and time</Text>
            <View style={styles.dateGroup}>
              <TimePicker date={taskDate} onPress={showTimePickerCallback} />
              <DatePicker date={taskDate} onPress={showDatePickerCallback} />
            </View>
          </View>
          <View style={styles.submitWrapper}>
            <Button
              onPress={() => {
                props.buttonCallback
              }}
              title={props.buttonName}
              color={Colors[colorScheme ?? "light"].violet}
              accessibilityLabel="Submit task creation"
            />
          </View>
        </View>
      </ScrollView>
      {showDatePicker && (
        <DateTimePicker
          value={taskDate}
          mode={datePickerMode}
          is24Hour={true}
          onChange={onDateChange}
          accentColor="black"
          textColor="black"
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
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
