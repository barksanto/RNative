import { useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"

import { StatusBar } from "expo-status-bar"

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function cancelModal() {
    setModalVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ])
    cancelModal()
  }

  //find goal by id and filter it out
  function deleteGoalHandler(id) {
    setCourseGoals((oldGoals) => {
      return oldGoals.filter((goal) => goal.key !== id)
      // console.log(oldGoals)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisible}
          cancelModal={cancelModal}
        />

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
    </>
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
