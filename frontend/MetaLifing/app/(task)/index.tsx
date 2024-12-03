import Header from "@/components/Header"
import Selector from "@/components/ui/Selector"
import { LayoutStyles } from "@/styles/layout"
import React from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function index() {
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
              <Selector
                items={[
                  <View
                    style={{
                      backgroundColor: "green",
                      height: 50,
                      width: 50,
                    }}
                  ></View>,
                  <View
                    style={{ backgroundColor: "yellow", height: 50, width: 50 }}
                  ></View>,
                  <View
                    style={{ backgroundColor: "red", height: 50, width: 50 }}
                  ></View>,
                ]}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  inputGroup: {},
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
