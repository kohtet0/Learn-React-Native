import { Button, StyleSheet, Text, View } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Setting" onPress={() => navigation.jumpTo("Setting")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
