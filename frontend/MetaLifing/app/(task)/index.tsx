import Header from "@/components/Header"
import { LayoutStyles } from "@/styles/layout"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function index() {
  return (
    <View>
      <SafeAreaView>
        <Header isReturnButtonActive={true} fontSize={26}>
          <Text>Create task</Text>
        </Header>
        <View style={LayoutStyles.mainView}>
          <Text>index1</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}
