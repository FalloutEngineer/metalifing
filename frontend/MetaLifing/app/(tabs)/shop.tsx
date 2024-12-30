import Header from "@/components/Header"
import BottomTabWrapper from "@/components/tabs/BottomTabWrapper"
import RedirectFab from "@/components/ui/RedirectFab"
import React, { useState } from "react"
import { View, SafeAreaView, StyleSheet } from "react-native"

import { LayoutStyles } from "@/styles/layout"
import ItemsGrid from "@/components/shop/ItemsGrid"
import ItemButton from "@/components/shop/ItemButton"
import Item from "@/components/shop/Item"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { changeAmountBy, deleteItem } from "@/redux/slices/items"
import { subtractCoins } from "@/redux/slices/coins"
import { ToastAndroid } from "react-native"

export default function Shop() {
  const items = useSelector((state: RootState) => state.items.inventory)
  const coins = useSelector((state: RootState) => state.coins.value)

  const dispatch = useDispatch()

  return (
    <View>
      <SafeAreaView>
        <Header>Shop</Header>
        <View style={[LayoutStyles.mainView, styles.filterContainer]}>
          <BottomTabWrapper>
            <ItemsGrid>
              {items.map((item) => (
                <Item
                  fontSize={16}
                  deleteCallback={() => dispatch(deleteItem(item))}
                  buttons={
                    <ItemButton
                      callback={() => {
                        if (coins < item.price) {
                          ToastAndroid.show(
                            "Not enough coins",
                            ToastAndroid.SHORT
                          )
                        } else {
                          dispatch(changeAmountBy({ id: item.id, amount: 1 }))
                          dispatch(subtractCoins(item.price))
                        }
                      }}
                    />
                  }
                  key={item.id}
                  {...item}
                />
              ))}
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
