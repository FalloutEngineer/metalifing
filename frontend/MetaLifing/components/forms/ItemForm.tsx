import { LayoutStyles } from "@/styles/layout"
import { Item, ItemFormProps, TaskFields, TaskFormProps } from "@/types"
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
import {
  debounce,
  getDateFromString,
  getRarityFromNumber,
  getRarityNumber,
} from "@/util/functions"
import { Difficulties, Priorities } from "@/constants/TaskAttributes"
import { Tags } from "@/constants/Tags"
import { Rarities } from "@/constants/Rarities"
import RarityItem from "../ui/RarityItem"

export default function ItemForm(props: ItemFormProps) {
  const [item, setItem] = useState<Item>({
    id: props.id || "0",
    name: props.name || "test",
    amount: props.amount || 0,
    price: props.price || 1,
    rarity: props.rarity || Rarities.COMMON,
  })

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    description: false,
  })

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
  const [datePickerMode, setDatePickerMode] = useState<"time" | "date">("date")

  //   const tryValidateForm = () => {
  //     const nameValidation = task.name === ""
  //     const descriptionValidation = task.description === ""

  //     const newValidationErrors = {
  //       name: nameValidation,
  //       description: descriptionValidation,
  //     }
  //     setValidationErrors(newValidationErrors)

  //     return nameValidation || descriptionValidation
  //   }

  const handleFormChange = (
    field: string,
    value: string | number | Difficulties | Priorities
  ) => {
    const updatedForm = { ...item, [field]: value }
    setItem(updatedForm)
    if (props.globalStateCallback) {
      props.globalStateCallback(updatedForm)
    }
  }

  const debouncedFormChangeHandler = useCallback(
    debounce(handleFormChange, 500),
    [JSON.stringify(item)]
  )

  const tagChangeHandler = (name: string, color: typeof Colors) => {
    const updatedForm = { ...item, tag: name, tagColor: color }
    setItem(updatedForm)
    if (props.globalStateCallback) {
      props.globalStateCallback(updatedForm)
    }
  }

  const debouncedTagChangeHandler = useCallback(
    debounce(tagChangeHandler, 500),
    [JSON.stringify(item)]
  )

  const colorScheme = useColorScheme()

  const sumbitButtonPressEvent = () => {
    // const validationUnsuccessfull = tryValidateForm()
    // if (!validationUnsuccessfull) {
    //   props.buttonCallback(task)
    // }
    console.log("test")
  }

  return (
    <>
      <ScrollView
        style={[LayoutStyles.mainView, styles.scrollableView]}
        contentContainerStyle={styles.scrollableViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inputsWrapper}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Item name</Text>
            <Text
              style={validationErrors.name ? styles.error : styles.disabled}
            >
              Please fill required field
            </Text>
            <TextInput
              style={[
                styles.input,
                validationErrors.name ? styles.inputValidationError : null,
              ]}
              defaultValue={props.name}
              placeholder="Wash the dishes..."
              onChange={(text) => {
                debouncedFormChangeHandler("name", text.nativeEvent.text)
              }}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Rarity</Text>
            <Selector
              itemStyles={{ borderRadius: 0 }}
              defaultValue={props.rarity ? getRarityNumber(props.rarity) : 0}
              onChange={(index: number) => {
                const indexString = index.toString()

                if (
                  Object.values(Difficulties).includes(
                    index.toString() as Difficulties
                  )
                )
                  debouncedFormChangeHandler(
                    "rarity",
                    getRarityFromNumber(index)
                  )
              }}
              items={[
                <RarityItem rarityValue={Rarities.COMMON} />,
                <RarityItem rarityValue={Rarities.UNCOMMON} />,
                <RarityItem rarityValue={Rarities.RARE} />,
                <RarityItem rarityValue={Rarities.LEGENDARY} />,
              ]}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputHeading}>Price</Text>
            <View style={styles.inputLineGroup}>
              <TextInput
                keyboardType="numeric"
                editable
                maxLength={3}
                placeholder={"0"}
                defaultValue={props.price?.toString()}
                style={[styles.input, styles.numberInput]}
                onChange={(price) => {
                  let moderatedValue = price.nativeEvent.text

                  if (
                    moderatedValue === "" ||
                    moderatedValue === null ||
                    moderatedValue === undefined
                  ) {
                    moderatedValue = "0"
                  }
                  debouncedFormChangeHandler(
                    "price",
                    Number.parseInt(moderatedValue)
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
          <View style={styles.submitWrapper}>
            <Button
              onPress={sumbitButtonPressEvent}
              title={props.buttonName}
              color={Colors[colorScheme ?? "light"].violet}
            />
          </View>
        </View>
      </ScrollView>
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
  inputValidationError: {
    borderColor: Colors.universal.ui.red,
    borderWidth: 1,
  },
  disabled: {
    display: "none",
  },
  error: {
    color: Colors.universal.ui.red,
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
