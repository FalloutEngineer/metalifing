import { TagType } from "./components/ui/TagStyles"
import { Difficulties, Priorities } from "./constants/TaskAttributes"

type TaskFields = {
  id: TaskId
  name: string
  description: string
  difficulty: Difficulties
  priority: Priorities
  tag: string
  reward: number
  dateAndTime: Date
  isDone: boolean
}

type TaskFormProps = Partial<TaskFields> & {
  buttonName: string
  buttonCallback: Function
}

type TaskId = number
