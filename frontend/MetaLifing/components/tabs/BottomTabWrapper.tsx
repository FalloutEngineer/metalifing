import React from "react"
import { View, StyleSheet } from "react-native"

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"

export default function BottomTabWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const tabBarHeight = useBottomTabBarHeight()

  return <View style={{ marginBottom: tabBarHeight }}>{children}</View>
}
