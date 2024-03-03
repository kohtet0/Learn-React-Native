import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  FlatList,
  SectionList,
} from "react-native";
import data from "./data.json";
import groupData from "./group-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* {data.map((arg) => {
          return (
            <View style={styles.listContainer} key={arg.id}>
              <Text style={styles.listText}>{arg.name}</Text>
              <Text style={styles.listText}>{arg.type}</Text>
            </View>
          );
        })} */}

      <View style={styles.scrollView}>
        {/* <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.listContainer} key={item.id}>
                <Text style={styles.listText}>{item.type}</Text>
                <Text style={styles.listText}>{item.name}</Text>
              </View>
            );
          }}
        /> */}

        <SectionList
          sections={groupData}
          renderItem={({ item }) => {
            return (
              <View style={styles.listContainer}>
                <Text style={styles.listText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return (
              <View style={{ marginBottom: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {section.type}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 15 }} />}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  listText: {
    fontSize: 20,
    fontWeight: "400",
  },
});
