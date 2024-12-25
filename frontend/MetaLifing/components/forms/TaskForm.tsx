import { LayoutStyles } from "@/styles/layout"
import { TaskFields, TaskFormProps } from "@/types"
import React, { useCallback, useState } from "react"
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
import { debounce, getDateFromString } from "@/util/functions"
import { Difficulties, Priorities } from "@/constants/TaskAttributes"
import { Tags } from "@/constants/Tags"

export default function TaskForm(props: TaskFormProps) {
  const [task, setTask] = useState<TaskFields>({
    id: "",
    name: props.name || "",
    description: props.description || "",
    difficulty: props.difficulty || Difficulties.EASY,
    priority: props.priority || Priorities.LOW,
    tag: props.tag || "Learning",
    tagColor: props.tagColor || Colors.universal.ui.green,
    reward: props.reward || 0,
    dateAndTime: props.dateAndTime || new Date().toString(),
    isDone: false,
  })

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
  const [datePickerMode, setDatePickerMode] = useState<"time" | "date">("date")

  const handleFormChange = (
    field: string,
    value: string | number | Difficulties | Priorities
  ) => {
    const updatedForm = { ...task, [field]: value }
    setTask(updatedForm)
    if (props.globalStateCallback) {
      props.globalStateCallback(updatedForm)
    }
  }

  const debouncedFormChangeHandler = useCallback(
    debounce(handleFormChange, 500),
    [JSON.stringify(task)]
  )

  const tagChangeHandler = (name: string, color: typeof Colors) => {
    const updatedForm = { ...task, tag: name, tagColor: color }
    setTask(updatedForm)
  }

  const debouncedTagChangeHandler = useCallback(
    debounce(tagChangeHandler, 500),
    [JSON.stringify(task)]
  )

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
      const updatedForm = { ...task, dateAndTime: currentDate.toString() }
      setTask(updatedForm)

      if (props.globalStateCallback) {
        props.globalStateCallback(updatedForm)
      }
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
              defaultValue={props.name}
              placeholder="Wash the dishes..."
              onChange={(text) => {
                debouncedFormChangeHandler("name", text.nativeEvent.text)
              }}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Task description</Text>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              defaultValue={props.description}
              placeholder={
                "Take the dishes from the table, place into the sink and turn on water..."
              }
              style={styles.input}
              onChange={(text) => {
                debouncedFormChangeHandler("description", text.nativeEvent.text)
              }}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Difficulty</Text>
            <Selector
              itemStyles={{ borderRadius: 100 }}
              onChange={(index: number) => {
                const indexString = index.toString()
                if (index.toString() in Difficulties)
                  debouncedFormChangeHandler(
                    "difficulty",
                    indexString.toString()
                  )
              }}
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
              onChange={(index: number) => {
                const indexString = index.toString()
                if (index.toString() in Priorities)
                  debouncedFormChangeHandler("priority", indexString.toString())
              }}
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
              onChange={(index: number) => {
                if (index < Tags.length) {
                  const tag = Tags[index]
                  debouncedTagChangeHandler(tag.text, tag.color)
                }
              }}
              items={Tags.map((tag) => (
                <Tag
                  key={tag.id}
                  text={tag.text}
                  color={tag.color}
                  type={TagType.OUTLINE}
                />
              ))}
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
                defaultValue={props.reward?.toString()}
                style={[styles.input, styles.numberInput]}
                onChange={(reward) => {
                  debouncedFormChangeHandler(
                    "reward",
                    Number.parseInt(reward.nativeEvent.text)
                  )
                }}
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
              <TimePicker
                date={getDateFromString(task.dateAndTime)}
                onPress={showTimePickerCallback}
              />
              <DatePicker
                date={getDateFromString(task.dateAndTime)}
                onPress={showDatePickerCallback}
              />
            </View>
          </View>
          <View style={styles.submitWrapper}>
            <Button
              onPress={() => {
                props.buttonCallback(task)
              }}
              title={props.buttonName}
              color={Colors[colorScheme ?? "light"].violet}
            />
          </View>
        </View>
      </ScrollView>
      {showDatePicker && (
        <DateTimePicker
          minimumDate={new Date()}
          value={getDateFromString(task.dateAndTime)}
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
