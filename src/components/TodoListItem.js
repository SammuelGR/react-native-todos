import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressTodo}
      onLongPress={onLongPressTodo}
    >
      <Text style={[styles.txt, todo.done ? styles.lineThrough : null]}>
        {todo.text}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    minHeight: 50,
    justifyContent: "center"
  },
  lineThrough: {
    textDecorationLine: "line-through"
  },
  txt: {
    fontSize: 19,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
