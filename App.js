// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.principalTitle}>GOALS APP</Text>
        <View style={styles.addView}>
          <TextInput
            placeholder='Ejemplo: Hacer ejercicio'
            style={styles.textbox}
          />
          <Button color='#00A8E8' title='ADD' />
        </View>
      </View>
      <View style={styles.bottomView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  topView: {
    backgroundColor: "#71B340",
    paddingTop: 50,
    padding: 40,
  },
  bottomView: {
    backgroundColor: "#FFFBFF",
  },
  principalTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FAFAFF",
  },
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
