import FilterBar from "@/components/filters/FilterBar"
import Header from "@/components/Header"
import TaskList from "@/components/tasklist/TaskList"
import { LayoutStyles } from "@/styles/layout"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Tasks() {
  return (
    <View>
      <SafeAreaView>
        <Header>Tasks</Header>
        <View style={styles.filterContainer}>
          <FilterBar />
          <TaskList />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    paddingBottom: 355,
  },
})
