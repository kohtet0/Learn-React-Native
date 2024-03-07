import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseListScreen from "./src/pageScreens/CourseList.screen";
import ProfileScreen from "./src/pageScreens/Profile.screen";
import SettingsScreen from "./src/pageScreens/Settings.screen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Course List"
          component={CourseListScreen}
          options={{
            title: "Course Lists",
            tabBarLabel: "Course",
            tabBarLabelPosition: "beside-icon",
            tabBarLabelStyle: {
              color: "blue",
            },
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={20} color={color} />
            ),
            tabBarBadge: 5,
            tabBarBadgeStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
