import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pageScreens/Home.screen";
import AboutScreen from "./src/pageScreens/About.screen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "deepskyblue",
          },
          headerTintColor: "blue",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => {
            return (
              <Pressable onPress={() => alert("u pressed menu")}>
                <Text
                  style={{ color: "blue", fontWeight: "500", fontSize: 16 }}
                >
                  Menu
                </Text>
              </Pressable>
            );
          },
          contentStyle: {
            backgroundColor: "skyblue",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "hello" }}
          // options={{
          //   title: "hello world",
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
