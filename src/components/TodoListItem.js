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
    backgroundColor: "#c5c5c5",
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  txt: {
    fontSize: 18
  }
});
