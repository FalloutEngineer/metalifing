import React from "react"
import PressableIcon from "../ui/PressableIcon"

export default function Edit(props: { callback: Function }) {
  return (
    <PressableIcon
      callback={props.callback}
      icon={"create"}
      size={48}
      color={"white"}
    />
  )
}
