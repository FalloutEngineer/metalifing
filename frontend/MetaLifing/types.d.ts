import { TagType } from "./components/ui/TagStyles"
import { Difficulties, Priorities } from "./constants/TaskAttributes"
import { Colors } from "./Colors"
import { Rarities } from "./constants/Rarities"

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

interface TodoInitialState {
  array: Array<TaskFields>
}

type TaskFormCallback = (task: TaskFields) => any

type GlobalStateTasksCallback = (task: TaskFields) => any

type ItemFormCallback = (item: Item) => any

type GlobalStateFormCallback = (item: Item) => any

type DoneCallback = () => any

type FormProps<A, B> = {
  buttonName: string
  buttonCallback: A
  globalStateCallback?: B
}

type TaskFormProps = Partial<TaskFields> &
  FormProps<TaskFormCallback, GlobalStateTasksCallback>

type TaskId = string

type Tag = {
  id: string
  text: string
  color: typeof Colors
}

type Coins = number

interface CoinsInitialState {
  value: Coins
}

type TasksStatesObject = {
  all: number
  inProgress: number
  completed: number
}

type FilterState = {
  state: number
}

type TaskFilter = number

type Item = {
  id: string
  name: string
  amount: number
  price: number
  rarity: Rarities
}
type ItemStoreState = {
  inventory: Item[]
}

type ItemAmountPayload = {
  id: string
  amount: number
}

type ItemFormProps = Partial<Item> &
  FormProps<ItemFormCallback, GlobalStateFormCallback>
