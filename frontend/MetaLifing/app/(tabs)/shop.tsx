import Header from "@/components/Header"
import BottomTabWrapper from "@/components/tabs/BottomTabWrapper"
import RedirectFab from "@/components/ui/RedirectFab"
import React from "react"
import { View, SafeAreaView, StyleSheet } from "react-native"

import { LayoutStyles } from "@/styles/layout"
import ItemsGrid from "@/components/shop/ItemsGrid"
import ItemButton from "@/components/shop/ItemButton"
import Item from "@/components/shop/Item"

export default function Shop() {
  return (
    <View>
      <SafeAreaView>
        <Header>Shop</Header>
        <View style={[LayoutStyles.mainView, styles.filterContainer]}>
          <BottomTabWrapper>
            <ItemsGrid>
              <Item
                price={1}
                name={"Test"}
                buttons={
                  <ItemButton
                    callback={() => {
                      console.log("first")
                    }}
                  />
                }
                fontSize={24}
              />
              <Item
                price={1}
                name={"Test"}
                buttons={
                  <ItemButton
                    callback={() => {
                      console.log("first")
                    }}
                  />
                }
                fontSize={24}
              />
              <Item
                price={1}
                name={"Test"}
                buttons={
                  <ItemButton
                    callback={() => {
                      console.log("first")
                    }}
                  />
                }
                fontSize={24}
              />
              <Item
                price={1}
                name={"Test"}
                buttons={
                  <ItemButton
                    callback={() => {
                      console.log("first")
                    }}
                  />
                }
                fontSize={24}
              />
              <Item
                price={1}
                name={"Test"}
                buttons={
                  <ItemButton
                    callback={() => {
                      console.log("first")
                    }}
                  />
                }
                fontSize={24}
              />
              <Item
                price={1}
                name={"Test"}
                buttons={
                  <ItemButton
                    callback={() => {
                      console.log("first")
                    }}
                  />
                }
                fontSize={24}
              />
              <Item
                price={1}
                name={"Test"}
                buttons={
                  <ItemButton
                    callback={() => {
                      console.log("first")
                    }}
                  />
                }
                fontSize={24}
              />
            </ItemsGrid>
          </BottomTabWrapper>
        </View>
      </SafeAreaView>
      <RedirectFab title={"+"} href={"/(create-item)"} />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    height: "100%",
  },
})
