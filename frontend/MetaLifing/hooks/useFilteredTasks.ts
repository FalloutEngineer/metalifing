import { RootState } from "@/redux/store"
import { TaskFilter } from "@/types"
import { useMemo } from "react"
import { useSelector } from "react-redux"

export default function useFilteredTasks() {
  const tasks = useSelector((state: RootState) => state.todos.array)
  const filter = useSelector((state: RootState) => state.taskFilter.state)

  const filteredTasks = useMemo(() => {
    return tasks.filter((item) => {
      let state = true

      if (filter === 1) {
        state = !item.isDone
      }

      if (filter === 2) {
        state = item.isDone
      }

      return state
    })
  }, [JSON.stringify(tasks), filter])

  return filteredTasks
}
