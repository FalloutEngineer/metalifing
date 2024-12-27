interface FilterButton {
  label: string
  number: number
  color: string
  filter: Function
}

export default interface FilterButtonProps extends FilterButton {
  state: boolean
}
