import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Box = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textColor}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
  },
  textColor: {
    textAlign: "center",
    color: "black",
  },
});

export default Box;
