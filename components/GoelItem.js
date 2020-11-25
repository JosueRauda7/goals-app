import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.textItem}>
      <Text style={{ color: "white" }}>{props.goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    padding: 10,
    backgroundColor: "#00AFB5",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default GoalItem;
