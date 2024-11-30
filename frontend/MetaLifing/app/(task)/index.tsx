import Header from "@/components/Header"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function index() {
  return (
    <SafeAreaView>
      <Header isReturnButtonActive={true}>
        <Text>Create task</Text>
      </Header>
      <Text>index1</Text>
    </SafeAreaView>
  )
}
