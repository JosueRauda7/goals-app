import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.show} animationType='slide'>
      <View style={styles.addView}>
        <TextInput
          placeholder='Ejemplo: Hacer ejercicio'
          style={styles.textbox}
          onChangeText={goalInput}
          value={enteredGoal}
        />
        <View style={{ marginBottom: 10 }}>
          <Button
            color='#00A8E8'
            title='AÑADIR'
            onPress={() => {
              props.addGoal(enteredGoal);
              setEnteredGoal("");
            }}
          />
        </View>
        {/* <View style={{ position: "fixed" }}> */}
        <Button
          color='#FF495C'
          title='CANCELAR'
          onPress={() => {
            props.close();
            setEnteredGoal("");
          }}
        />
        {/* </View> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addView: {
    justifyContent: "center",
    backgroundColor: "#FFFBFF",
    // height: "100%",
    padding: 20,
    flex: 1,
  },
  textbox: {
    borderBottomColor: "#0A0908",
    borderBottomWidth: 1,
    fontSize: 15,
    padding: 5,
    color: "#0A0908",
    width: "100%",
    marginBottom: 20,
  },
});

export default GoalInput;
