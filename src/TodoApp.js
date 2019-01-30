import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import TodoForm from "./components/TodoForm";

export default class TodoApp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TodoForm />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }
});
