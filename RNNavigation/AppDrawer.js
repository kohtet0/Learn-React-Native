import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./src/pageScreens/Dashboard.screen";
import SettingScreen from "./src/pageScreens/Setting.screen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerLabel: "Enter Dashboard",
          drawerActiveTintColor: "blue",
          drawerActiveBackgroundColor: "skyblue",
          drawerContentStyle: {
            backgroundColor: "lightblue",
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "Welcome Dashboard",
          }}
        />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
