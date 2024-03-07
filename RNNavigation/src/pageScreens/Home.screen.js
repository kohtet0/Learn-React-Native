import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{route.params?.about}</Text>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
