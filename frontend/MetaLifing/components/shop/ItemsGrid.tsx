import { ReactNode } from "react"
import { StyleSheet, FlatList, View } from "react-native"

export default function ItemsGrid(props: { children: ReactNode[] }) {
  return (
    <FlatList
      style={styles.grid}
      data={props.children}
      renderItem={(item) => {
        return <View>{item.item}</View>
      }}
      numColumns={3}
    />
  )
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
  },
})
