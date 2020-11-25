import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.addView}>
      <TextInput
        placeholder='Ejemplo: Hacer ejercicio'
        style={styles.textbox}
        onChangeText={goalInput}
        value={enteredGoal}
      />
      <Button
        color='#00A8E8'
        title='ADD'
        onPress={() => {
          props.addGoal(enteredGoal);
          setEnteredGoal("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textbox: {
    borderBottomColor: "#FAFAFF",
    borderBottomWidth: 1,
    fontSize: 15,
    padding: 5,
    color: "#FAFAFF",
    width: "80%",
  },
});

export default GoalInput;
