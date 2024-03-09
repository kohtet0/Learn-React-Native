import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Lists from "./src/Lists";

export default function App() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);

  const handleAddBtn = () => {
    if (input !== "") {
      const inputData = {
        id: Date.now(),
        title: input,
        isCompleted: false,
      };
      setLists((pre) => [...pre, inputData]);
      setInput("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headingText}>Todo List</Text>
      </View>
      <TextInput
        autoFocus
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Pressable onPress={handleAddBtn} style={styles.btn}>
        <Text style={styles.btnText}>
          <AntDesign name="plus" size={16} color="white" /> Add
        </Text>
      </Pressable>
      <View style={styles.actionContainer}>
        <View>
          <Text style={styles.actionText}>Your List</Text>
        </View>
        <View>
          <Text style={styles.actionText}>Done ( 0/{lists.length} )</Text>
        </View>
      </View>
      <Lists lists={lists} setLists={setLists} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 5,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
    marginBottom: 15,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  actionText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
