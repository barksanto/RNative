import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
  function alertHi() {
    alert("hellooo")
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>hi!</Text>
      </View>
      <Text>hi again</Text>
      <Button title="Tap me!" onPress={alertHi} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
