import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ onChangeText, value }) => (
  <TextInput style={styles.input} onChangeText={onChangeText} value={value} />
);

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default Input;
