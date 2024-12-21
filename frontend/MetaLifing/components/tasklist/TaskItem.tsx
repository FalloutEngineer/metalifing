import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"
import TaskFields from "./types"
import Tag from "../ui/Tag"
import { Colors } from "@/constants/Colors"
import { TagType } from "../ui/TagStyles"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Difficulties, Priorities } from "@/constants/TaskAttributes"
import Done from "./Done"
import Edit from "./Edit"
import { Link, router } from "expo-router"

export default function TaskItem(props: TaskFields) {
  const difficultyColor: string = getDifficultyColor(props.difficulty)

  function getDifficultyColor(difficulty: Difficulties): string {
    let output: string
    switch (difficulty) {
      case Difficulties.EASY:
        output = Colors.universal.difficulties.easy
        break
      case Difficulties.NORMAL:
        output = Colors.universal.difficulties.normal
        break
      case Difficulties.HARD:
        output = Colors.universal.difficulties.hard
        break
      case Difficulties.NIGHTMARE:
        output = Colors.universal.difficulties.nightmare
        break
      default:
        output = Colors.universal.difficulties.easy
        break
    }

    return output
  }

  const priority = getPriorityText(props.priority)
  const priorityColor = getPriorityColor(props.priority)

  function getPriorityText(priority: Priorities): string {
    let output: string

    switch (priority) {
      case Priorities.LOW:
        output = "Low"
        break
      case Priorities.MEDIUM:
        output = "Medium"
        break
      case Priorities.HIGH:
        output = "High"
        break
      default:
        output = "Low"
        break
    }

    return output
  }

  function getPriorityColor(priority: Priorities): string {
    let output

    switch (priority) {
      case Priorities.LOW:
        output = Colors.universal.priorities.low
        break
      case Priorities.MEDIUM:
        output = Colors.universal.priorities.medium
        break
      case Priorities.HIGH:
        output = Colors.universal.priorities.high
        break
      default:
        output = Colors.universal.priorities.low
        break
    }

    return output
  }

  return (
    <View style={styles.body}>
      <View style={styles.left}>
        {props.reward > 0 && (
          <View style={styles.rewardContainer}>
            <Text style={styles.rewardText}>{props.reward}</Text>
            <Ionicons
              size={18}
              style={[
                {
                  marginBottom: -3,
                },
              ]}
              color={Colors.universal.ui.diamond}
              name={"diamond-outline"}
            />
          </View>
        )}
        <Text style={styles.heading}>{props.label}</Text>
        <View style={styles.tagsContainer}>
          <Tag text={priority} color={priorityColor} type={TagType.SOLID} />
          <Tag text={props.tag} color={props.tagColor} type={TagType.OUTLINE} />
        </View>
        <View style={styles.dataContainer}>
          <Ionicons
            size={18}
            style={[{ marginBottom: -3 }]}
            name={"calendar-outline"}
          />
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </View>
      <View style={[styles.right, { backgroundColor: difficultyColor }]}>
        <Done
          callback={() => {
            //TODO:
            console.log("done", props.label)
          }}
        />
        <Edit
          callback={() => {
            router.push(`/(edit-task)/${props.id}`)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowColor: "black",
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),

    borderRadius: 12,
  },
  left: { padding: 15, display: "flex", gap: 5 },
  heading: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "Arial",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginTop: 5,
  },
  date: { fontSize: 16, lineHeight: 19 },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
    width: "30%",
  },
  rewardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 8,
  },
  rewardText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    maxWidth: 50,
  },
})
