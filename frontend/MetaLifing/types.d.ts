import { TagType } from "./components/ui/TagStyles"
import { Difficulties, Priorities } from "./constants/TaskAttributes"
import { Colors } from "./Colors"

type TaskFields = {
  id: TaskId
  name: string
  description: string
  difficulty: Difficulties
  priority: Priorities
  tag: string
  tagColor: typeof Colors
  reward: number
  dateAndTime: string
  isDone: boolean
}

type TaskFormCallback = (task: TaskFields) => any

type GlobalStateCallback = (task: TaskFields) => any

type DoneCallback = () => any

type TaskFormProps = Partial<TaskFields> & {
  buttonName: string
  buttonCallback: TaskFormCallback
  globalStateCallback?: GlobalStateCallback
}

type TaskId = string

type Tag = {
  id: string
  text: string
  color: typeof Colors
}
