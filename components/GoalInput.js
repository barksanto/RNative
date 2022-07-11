import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
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

  console.log(enteredGoalText)

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          // source="/somepath"
          style={styles.image}
        />
        <TextInput
          placeholder="Course goals my dude"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.cancelModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 25,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 75,
    height: 75,
    margin: 20,
  },
})
