import { RootState } from "@/redux/store"
import { TaskFields, TasksStatesObject } from "@/types"
import { useMemo } from "react"
import { useSelector } from "react-redux"

export function useTasksStates() {
  const tasks = useSelector((state: RootState) => state.todos)

  const taksksStates = useMemo(() => {
    return tasks.array.reduce(
      (obj: TasksStatesObject, item: TaskFields) => {
        obj.all = obj.all + 1
        if (item.isDone) {
          obj.completed = obj.completed + 1
        } else {
          obj.inProgress = obj.inProgress + 1
        }

        return obj
      },
      {
        all: 0,
        inProgress: 0,
        completed: 0,
      }
    )
  }, [JSON.stringify(tasks)])

  return taksksStates
}
