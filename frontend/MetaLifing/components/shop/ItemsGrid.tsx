import { ReactNode } from "react"
import { StyleSheet, FlatList, View } from "react-native"

export default function ItemsGrid(props: { children: ReactNode[] }) {
  return (
    <FlatList
      data={props.children}
      contentContainerStyle={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 15,
      }}
      columnWrapperStyle={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",

        marginBottom: "2%",
      }}
      renderItem={(item) => {
        return <View style={styles.item}>{item.item}</View>
      }}
      numColumns={3}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    maxWidth: "32%",
    aspectRatio: 1,
    width: "100%",
  },
})
