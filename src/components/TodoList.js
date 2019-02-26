import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, toggleTodo }) => (
  <View>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        onPressTodo={() => toggleTodo(todo.id)}
        todo={todo}
      />
    ))}
  </View>
);

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

export default connect(
  mapStateToProps,
  {
    toggleTodo
  }
)(TodoList);

const styles = StyleSheet.create({});
