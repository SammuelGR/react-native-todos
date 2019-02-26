import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <TodoForm />
          <TodoList />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }
});
