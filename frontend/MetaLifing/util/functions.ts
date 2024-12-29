import { Rarities } from "@/constants/Rarities"

export function getDateFromString(date: string): Date {
  return new Date(date.split("/").join("-"))
}

export function getFriendlyTime(date: Date): string {
  return `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`
}

export function getFriendlyDate(date: Date): string {
  return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  }.${date.getFullYear()}`
}

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export const getRarityNumber = (rarity: Rarities): number => {
  switch (rarity) {
    case Rarities.COMMON:
      return 0
    case Rarities.UNCOMMON:
      return 1
    case Rarities.RARE:
      return 2
    case Rarities.LEGENDARY:
      return 3
  }
}

export const getRarityFromNumber = (rarity: number): Rarities => {
  switch (rarity) {
    case 1:
      return Rarities.UNCOMMON
    case 2:
      return Rarities.RARE
    case 3:
      return Rarities.LEGENDARY
    default:
      return Rarities.COMMON
  }
}
