import React from "react";
import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

const App = () => {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: "yellow"}}>Box 1</Box>
      <Box>Box 2</Box>
      <Box>Box 3</Box>
      <Box>Box 4</Box>
      <Box>Box 5</Box>
      <Box>Box 6</Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  textColor: {
    color: "white",
  },
});

export default App;

// import {
//   ActivityIndicator,
//   Alert,
//   Button,
//   Image,
//   ImageBackground,
//   Modal,
//   Pressable,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import img from "./assets/Screenshot (21).png";
// import img2 from "./assets/adaptive-icon.png";
// import { useState } from "react";
// import Greet from "./components/Greet";

// const App = () => {
//   const [openModal, setOpenModal] = useState(false);
//   return (
//     <View style={styles.container}>
//       <View style={styles.blue}>
//         <Text style={styles.textColor}>Hello blue</Text>
//       </View>
//       <View style={styles.red}>
//         <Text style={styles.textColor}>Hello red</Text>
//       </View>

//       {/* <ScrollView>
//         <Text>Hello World!</Text>
//         <ImageBackground
//           source={img2}
//           style={{ flex: 1, width: 100, height: 100 }}
//         >
//           <Image source={img} style={{ width: 50, height: 50 }} />
//         </ImageBackground>
//         <Button
//           title="Open Modal"
//           onPress={() => {
//             setOpenModal(true);
//           }}
//         />

//         <Modal visible={openModal} onRequestClose={() => setOpenModal(false)}>
//           <View>
//             <Text>Hello World</Text>
//             <Pressable
//               style={{
//                 marginTop: 10,
//                 borderColor: "blue",
//                 borderStyle: "solid",
//                 borderWidth: 1,
//                 padding: 10,
//               }}
//             >
//               <Text onPress={() => setOpenModal(false)}>Close Modal</Text>
//             </Pressable>
//           </View>
//         </Modal>

//         <ActivityIndicator size={"large"} animating={true} color={"black"} />

//         <Button
//           title="Alert"
//           onPress={() => {
//             Alert.alert("Invalid data!", "your password is incorrect", [
//               {
//                 text: "Cancel",
//                 onPress: () => console.log("u pressed cancel"),
//               },
//               {
//                 text: "OK",
//                 onPress: () => console.log("u pressed ok"),
//               },
//             ]);
//           }}
//         />

//         <Greet name={"ko htet"} />

//         <StatusBar backgroundColor={"blue"} animated barStyle={"default"} />
//       </ScrollView> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 20,
//   },
//   blue: {
//     backgroundColor: "blue",
//     padding: 10,
//   },
//   red: {
//     backgroundColor: "red",
//     padding: 10,
//   },
//   textColor: {
//     color: "white",
//   },
// });

// export default App;
