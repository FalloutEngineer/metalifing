import Header from "@/components/Header"
import Separator from "@/components/Separator"
import Subheading from "@/components/Subheading"
import TitledNumberBlock from "@/components/TitledNumberBlock"
import { LayoutStyles } from "@/styles/layout"
import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <View style={LayoutStyles.mainView}>
      <SafeAreaView>
        <Header>Home</Header>
        <View style={styles.summary}>
          <Subheading>Summary</Subheading>
          <View style={styles.summaryRow}>
            <TitledNumberBlock
              number={165}
              name={"Completed"}
              color={"#90CB37"}
              type={"square"}
            />
            <TitledNumberBlock
              number={55}
              name={"In Progress"}
              color={"#E68D3C"}
              type={"square"}
            />
          </View>
          <View>
            <Separator margin={15} />
          </View>
          <View style={styles.inTotal}>
            <TitledNumberBlock
              number={2132131241249}
              name={"Earned in total"}
              color={"#3CC5E6"}
              type={"long"}
            />
            <TitledNumberBlock
              number={3213124124}
              name={"Spent in total"}
              color={"#855691"}
              type={"long"}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  summary: {
    display: "flex",
    marginTop: 25,
  },
  summaryRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  inTotal: {
    display: "flex",
    gap: 15,
  },
})
