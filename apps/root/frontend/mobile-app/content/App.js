import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import Goalnput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState([]);

  function handleButton(name) {
    setGoal((currentGoal) => [
      ...currentGoal,
      { text: name, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Goalnput onAddGoal={handleButton} />
      <View>
        <FlatList
          data={goal}
          renderItem={(value) => {
            return <GoalItem text={value.item.text} />;
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
