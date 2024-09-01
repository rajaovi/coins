import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import Goalnput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goal, setGoal] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function handleButton(name) {
    setGoal((currentGoal) => [
      ...currentGoal,
      { text: name, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {modalVisible && (
        <Goalnput
          visible={modalVisible}
          onAddGoal={handleButton}
          onCancel={endAddGoalHandler}
        />
      )}

      <View>
        <FlatList
          data={goal}
          renderItem={(value) => {
            return (
              <GoalItem
                text={value.item.text}
                id={value.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(val, ind) => {
            return val.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingHorizontal: 15,
  },
});
