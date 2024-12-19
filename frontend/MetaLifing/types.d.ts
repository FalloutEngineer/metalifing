import { TagType } from "./components/ui/TagStyles"
import { Difficulties, Priorities } from "./constants/TaskAttributes"

type TaskProps = {
  name: string
  description: string
  difficulty: Difficulties
  priority: Priorities
  tag: string
  reward: number
  dateAndTime: Date
  isDone: boolean
}

type TaskFormProps = Partial<TaskProps> & {
  buttonName: string
  buttonCallback: Function
}
