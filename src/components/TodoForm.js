import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { addTodo } from "../actions";
import Input from "./Input";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  onChangeText(text) {
    this.setState({ text });
  }

  onPress() {
    this.props.dispatchAddTodo(this.state.text);
  }

  render() {
    const { text } = this.state;

    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input onChangeText={text => this.onChangeText(text)} value={text} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.onPress()} title="add" />
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
    marginHorizontal: 5,
    flex: 4
  }
});

export default connect(
  null,
  {
    dispatchAddTodo: addTodo
  }
)(TodoForm);
