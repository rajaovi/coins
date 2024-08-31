import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function Goalnput(props) {
  const [name, setName] = useState("");

  function handleInput(text) {
    setName(text);
  }

  function handleGoal() {
    props.onAddGoal(name);
    setName("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Input"
        onChangeText={handleInput}
        value={name}
      />
      <Button title="Add Button" onPress={handleGoal} />
    </View>
  );
}

export default Goalnput;

const styles = StyleSheet.create({
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
});
