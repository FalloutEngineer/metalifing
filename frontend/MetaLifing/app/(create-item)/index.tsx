import Header from "@/components/Header"
import { SafeAreaView, Text, StyleSheet } from "react-native"

export default function index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isReturnButtonActive={true} fontSize={26}>
        <Text>Create item</Text>
      </Header>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
