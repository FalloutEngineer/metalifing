import Header from "@/components/Header"
import Selector from "@/components/ui/Selector"
import Tag from "@/components/ui/Tag"
import { TagType } from "@/components/ui/TagStyles"
import { Colors } from "@/constants/Colors"
import { LayoutStyles } from "@/styles/layout"
import { Ionicons } from "@expo/vector-icons"
import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import DateTimePicker from "@react-native-community/datetimepicker"

export default function index() {
  const [taskDate, setTaskDate] = useState<Date>(new Date())

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)

  return (
    <View>
      <SafeAreaView>
        <Header isReturnButtonActive={true} fontSize={26}>
          <Text>Create task</Text>
        </Header>
        <View style={LayoutStyles.mainView}>
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
          </View>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={taskDate}
            mode={"date"}
            is24Hour={true}
            onChange={() => {}}
            accentColor="black"
            textColor="black"
          />
        )}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  inputGroup: {},
  inputLineGroup: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  numberInput: {
    width: 50,
    textAlign: "center",
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
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  inputHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputsWrapper: {
    display: "flex",
    gap: 15,
    marginTop: 15,
  },
})
