import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Input"
          onChangeText={handleInput}
          value={name}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Button" onPress={handleGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Goalnput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 8,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 0,
    marginVertical: 12,
  },
});
