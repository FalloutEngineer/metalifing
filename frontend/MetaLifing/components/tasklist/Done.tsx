import { Pressable, Text } from "react-native"
import PressableIcon from "../ui/PressableIcon"

export default function Done(props: { callback: Function; isDone?: boolean }) {
  return (
    <PressableIcon
      callback={props.callback}
      icon={props.isDone ? "close" : "checkmark"}
      size={32}
      color={"white"}
    />
  )
}
