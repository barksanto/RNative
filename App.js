import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
  function alertHi() {
    alert("hellooo")
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.first}>hi!</Text>
      </View>
      <Text style={styles.first}>hi again</Text>
      <Button title="Tap me!" onPress={alertHi} style={styles.button} />
    </View>
  )
}

// best to do it this way - RNs Stylesheet object provides validations + errors
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  first: {
    backgroundColor: "pink",
    borderWidth: 4,
    borderColor: "blue",
    padding: 20,
    borderRadius: 6,
    margin: 5,
  },
})
