import { StyleSheet, Text, View, Button, TextInput } from "react-native"

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  )
}

// best to do it this way - RNs Stylesheet object provides validations + errors
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "lightblue",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
  },
})
