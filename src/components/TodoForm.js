import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { addTodo, setTodoText, updateTodo } from "../actions";
import Input from "./Input";

class TodoForm extends React.Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  onPress() {
    const { todo } = this.props;
    if (todo.text) {
      if (todo.id) this.props.dispatchUpdateTodo(todo);
      else this.props.dispatchAddTodo(todo.text);
    }
  }

  render() {
    const { text, id } = this.props.todo;

    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onPress={() => this.onPress()}
            onChangeText={text => this.onChangeText(text)}
            value={text}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.onPress()} title={id ? "save" : "add"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  formContainer: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  inputContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
    marginRight: 5,
    flex: 4
  }
});

const mapStateToProps = state => {
  return {
    todo: state.editingTodo
  };
};

export default connect(
  mapStateToProps,
  {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
  }
)(TodoForm);
