import { StyleSheet, View, Text } from "react-native"
// import { StyleSheet } from "react-native"

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    marginBottom: 4,
    padding: 8,
    borderRadius: 6,
    borderColor: "blue",
    borderWidth: 1,
  },
  goalText: {
    color: "white",
  },
})
