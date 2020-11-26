import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ClippingRectangle,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      // activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.textItem}>
        <Text style={{ color: "white" }}>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textItem: {
    padding: 10,
    backgroundColor: "#97CC04",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default GoalItem;
