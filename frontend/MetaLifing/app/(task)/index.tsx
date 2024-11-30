import Header from "@/components/Header"
import { LayoutStyles } from "@/styles/layout"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function index() {
  return (
    <View style={LayoutStyles.mainView}>
      <SafeAreaView>
        <Header isReturnButtonActive={true}>
          <Text>Create task</Text>
        </Header>
        <Text>index1</Text>
      </SafeAreaView>
    </View>
  )
}
