import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ onChangeText, onPress, value }) => (
  <TextInput
    returnKeyType="send"
    style={styles.input}
    onChangeText={onChangeText}
    onSubmitEditing={onPress}
    placeholder="Adicionar To Do..."
    value={value}
  />
);

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    paddingLeft: 5
  }
});

export default Input;
