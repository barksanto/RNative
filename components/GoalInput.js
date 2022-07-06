import { View, TextInput, Button, StyleSheet, Modal } from "react-native"
import { useState } from "react"

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("")

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    // 2 differet states
    props.onAddGoal(enteredGoalText) // courseGoals state
    setEnteredGoalText("") // input text state
  }

  return (
    <Modal>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals my dude"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
})
