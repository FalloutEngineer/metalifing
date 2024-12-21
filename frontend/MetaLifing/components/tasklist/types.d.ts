import { Difficulties, Priorities } from "@/constants/TaskAttributes"

export default interface TaskFields {
  id: string
  label: string
  reward: number
  date: string
  difficulty: Difficulties
  priority: Priorities
  tag: string
  tagColor: string
}
