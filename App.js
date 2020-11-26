// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoelItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goal) => {
    if (goal.trim().length !== 0) {
      setGoals((currentGoals) => [
        ...currentGoals,
        {
          key: Math.random().toString(),
          value: goal,
        },
      ]);
      setShowModal(false);
    }
  };

  const closeModal = () => setShowModal(false);

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId.toString());
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.principalTitle}>GOALS APP</Text>
        <Button
          color='#00A8E8'
          title='Añadir meta'
          onPress={() => setShowModal(true)}
        />
        <GoalInput
          close={closeModal}
          show={showModal}
          addGoal={addGoalHandler}
        />
      </View>
      <Text style={styles.indicationText}>
        Presiona un cuadro para finalizar meta
      </Text>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.key}
        renderItem={(goal) => (
          <GoalItem
            id={goal.item.key}
            onDelete={removeGoalHandler}
            goal={goal.item.value}
          />
        )}
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
    paddingTop: 60,
    padding: 40,
    paddingBottom: 30,
  },
  bottomView: {
    paddingVertical: 5,
    padding: 20,
  },
  principalTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FAFAFF",
    marginBottom: 15,
  },
  indicationText: {
    textAlign: "center",
    marginTop: 10,
  },
});
