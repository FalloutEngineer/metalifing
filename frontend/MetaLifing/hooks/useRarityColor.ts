import { Colors } from "@/constants/Colors"
import { Rarities } from "@/constants/Rarities"

export function useRarityColor(name: Rarities) {
  return Colors.universal.rarities[name]
}
