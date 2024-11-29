import { Difficulties, Priorities } from "@/constants/TaskAttributes"

export default interface TaskProps {
  id: string
  label: string
  reward: number
  date: string
  difficulty: Difficulties
  priority: Priorities
  tag: string
  tagColor: string
}
