// import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import CustomBtnAndroid from "./components/customBtn/CustomBtn";

export default function App() {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  // });

  // useEffect(() => {
  //   const data = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });
  //   return data?.remove();
  // }, []);

  // const { window } = dimensions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            {
              width: windowWidth > 400 ? "60%" : "90%",
              height: windowHeight > 600 ? "60%" : "90%",
            },
          ]}
        >
          <Text
            style={[styles.text, { fontSize: windowWidth > 500 ? 50 : 25 }]}
          >
            Open up App.js to start working on your app!
          </Text>
          <CustomBtnAndroid
            onPress={() => alert("u clicked")}
            title={"Click Me"}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 600 ? "60%" : "90%",
    // height: windowHeight > 500 ? "70%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontWeight: "bold",
    // fontSize: windowWidth > 600 ? 30 : 15,
  },
});
