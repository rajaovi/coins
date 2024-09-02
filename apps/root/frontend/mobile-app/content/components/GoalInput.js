import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

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
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Input"
          onChangeText={handleInput}
          value={name}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Button" onPress={handleGoal} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Goalnput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    color: "#120438",
    padding: 8,
    borderRadius: 6,
    padding: 16,
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
