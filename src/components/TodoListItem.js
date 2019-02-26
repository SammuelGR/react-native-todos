import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoListItem = ({ todo }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text style={styles.txt}>{todo.text}</Text>
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
  txt: {
    fontSize: 19,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
