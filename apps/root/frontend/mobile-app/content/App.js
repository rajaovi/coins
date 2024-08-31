import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState([]);

  function handleInput(text) {
    setName(text);
  }
  function handleButton() {
    setGoal((currentGoal) => [
      ...currentGoal,
      { text: name, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Input"
          onChangeText={handleInput}
          a
        />
        <Button title="Add Button" onPress={handleButton} />
      </View>
      <View>
        <FlatList
          data={goal}
          renderItem={(value) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{value.item.text}</Text>
              </View>
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
  inputContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 20,
    paddingBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 8,
    width: "70%",
  },
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
