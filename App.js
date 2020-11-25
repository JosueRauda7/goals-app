// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  // Button,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoelItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    if (goal.trim().length !== 0) {
      setGoals((currentGoals) => [
        ...currentGoals,
        {
          key: Math.random().toString(),
          value: goal,
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.principalTitle}>GOALS APP</Text>
        <GoalInput addGoal={addGoalHandler} />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.key}
        renderItem={(goal) => <GoalItem goal={goal.item.value} />}
        style={styles.bottomView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFBFF",
    height: "100%",
  },
  topView: {
    backgroundColor: "#71B340",
    paddingTop: 50,
    padding: 40,
  },
  bottomView: {
    padding: 20,
  },
  principalTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FAFAFF",
  },
});
