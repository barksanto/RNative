import { StyleSheet, View, Text, Pressable } from "react-native"

function GoalItem(props) {
  // console.log(props)
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
