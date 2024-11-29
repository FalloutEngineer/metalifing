import React, { PropsWithChildren, useState } from "react"
import { View } from "react-native"
import Heading from "./Heading"
import Coins from "./Coins"
import { LayoutStyles } from "@/styles/layout"

export default function Header({ children }: { children: React.ReactNode }) {
  const [coins, setCoins] = useState(999999998)
  return (
    <View style={LayoutStyles.header}>
      <Heading>{children}</Heading>
      <Coins coins={coins} />
    </View>
  )
}
