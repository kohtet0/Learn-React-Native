import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomBtnAndroid = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default CustomBtnAndroid;

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 10,
  },
});
