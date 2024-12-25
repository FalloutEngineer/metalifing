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
