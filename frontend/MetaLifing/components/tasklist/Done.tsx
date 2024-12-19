import { Pressable, Text } from "react-native"
import PressableIcon from "../ui/PressableIcon"

export default function Done(props: { callback: Function }) {
  return (
    <PressableIcon
      callback={props.callback}
      icon={"checkmark"}
      size={32}
      color={"white"}
    />
  )
}
