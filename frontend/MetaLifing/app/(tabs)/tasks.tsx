import FilterBar from "@/components/filters/FilterBar"
import Header from "@/components/Header"
import BottomTabWrapper from "@/components/tabs/BottomTabWrapper"
import TaskList from "@/components/tasklist/TaskList"
import Fab from "@/components/ui/Fab"
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
          <BottomTabWrapper>
            <TaskList />
          </BottomTabWrapper>
        </View>
      </SafeAreaView>
      <Fab onPress={() => {}} title={"+"} />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    height: "100%",
  },
})
