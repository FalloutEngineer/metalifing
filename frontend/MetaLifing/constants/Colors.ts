/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4"
const tintColorDark = "#fff"

const violetColorLight = "#855691"
const violetColorDark = "#fff"

export const Colors = {
  universal: {
    ui: {
      diamond: "#3CC5E6",
      orange: "#E68D3C",
      green: "#90CB37",
      red: "red",
      gray: "gray",
      violet: "violet",
    },
    difficulties: {
      easy: "#90CB37",
      normal: "#E68D3C",
      hard: "red",
      nightmare: "#440000",
    },
    priorities: {
      low: "#90CB37",
      medium: "#E68D3C",
      high: "red",
    },
  },
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    violet: violetColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    violet: violetColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
}
