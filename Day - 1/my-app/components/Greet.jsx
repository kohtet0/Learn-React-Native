import React from "react";
import { Text, View } from "react-native";

const Greet = ({ name }) => {
  return (
    <View>
      <Text>Welcom {name}</Text>
    </View>
  );
};

export default Greet;
