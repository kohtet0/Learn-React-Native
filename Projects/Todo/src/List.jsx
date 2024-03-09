import React, { useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";

export default function List({
  item: { id, title, isCompleted },
  lists,
  setLists,
}) {
  const [editInput, setEditInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditBtn = () => {
    setIsEditing(true);
  };

  const handleDelBtn = (argId) => {
    Alert.alert(
      "Are you sure!",
      "Item has been delete if you click yes. This action haven't undo.",
      [
        {
          text: "NO",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => setLists(lists.filter((list) => list.id !== argId)),
        },
      ]
    );
  };

  const handleComplete = (id) => {};

  return (
    <View key={id} style={styles.listContainer}>
      {isEditing ? (
        <View style={styles.editContainer}>
          <TextInput
            value={editInput || title}
            onChangeText={setEditInput}
            style={styles.editInput}
            autoFocus
          />
          <AntDesign
            onPress={() => setIsEditing(false)}
            name="check"
            size={40}
            color="black"
          />
        </View>
      ) : (
        <>
          <BouncyCheckbox
            isChecked={isCompleted}
            size={20}
            fillColor="red"
            unfillColor="#FFFFFF"
            text={editInput || title}
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={() => handleComplete}
          />
          <View style={styles.iconContainer}>
            <Pressable onPress={handleEditBtn}>
              <AntDesign name="edit" size={25} color="black" />
            </Pressable>
            <Pressable onPress={() => handleDelBtn(id)}>
              <AntDesign name="delete" size={25} color="black" />
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  editInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "80%",
  },
});
