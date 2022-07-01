import { useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ])
  }

  //find goal by id and filter it out
  function deleteGoalHandler(id) {
    setCourseGoals((oldGoals) => {
      return oldGoals.filter((goal) => goal.key !== id)
      // console.log(oldGoals)
    })

    // console.log(id)
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.key}
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.key
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
}

// best to do it this way - RNs Stylesheet object provides validations + errors
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
  },
})
