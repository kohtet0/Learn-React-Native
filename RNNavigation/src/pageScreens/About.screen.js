import { Button, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";

const AboutScreen = ({ navigation, route }) => {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "lee",
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text>AboutScreen {name}</Text>
      <Button
        title="update name"
        onPress={() => navigation.setParams({ name: "hello world" })}
      />
      <Button
        title="go back home"
        onPress={() =>
          navigation.navigate("Home", {
            about: "lee lrr",
          })
        }
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
