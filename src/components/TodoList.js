import React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { toggleTodo, setEditingTodo } from "../actions";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, toggleTodo, setEditingTodo }) => (
  <ScrollView>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        onPressTodo={() => toggleTodo(todo.id)}
        onLongPressTodo={() => setEditingTodo(todo)}
        todo={todo}
      />
    ))}
  </ScrollView>
);

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

export default connect(
  mapStateToProps,
  {
    toggleTodo,
    setEditingTodo
  }
)(TodoList);
