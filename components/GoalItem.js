import { StyleSheet, View, Text, Pressable } from "react-native"

function GoalItem(props) {
  // console.log(props)
  return (
    // to make ripple effect on outside, make Pressable surround Text instead of entire view
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#7d58bf" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    marginVertical: 4,
    borderRadius: 6,
    borderColor: "blue",
    borderWidth: 1,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
})
