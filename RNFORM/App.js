import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let arrs = {};

    if (!username) arrs.username = "Username is required.";
    if (!password) arrs.password = "Password is required.";

    setErrors(arrs);

    return Object.keys(arrs).length === 0; // true || false
  };

  handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.form}
      >
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={styles.image}
        />
        {/* for username */}
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={[
            styles.input,
            errors.username ? { borderColor: "red" } : null,
          ]}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="words"
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}

        {/* for password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[
            styles.input,
            errors.username ? { borderColor: "red" } : null,
          ]}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  form: {
    backgroundColor: "#e3f3f3",
    borderWidth: 1,
    padding: 20,
    borderRadius: 16,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  errorText: {
    color: "red",
    marginTop: -10,
    marginBottom: 10,
  },
});

export default App;

// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   TextInput,
//   Switch,
// } from "react-native";
// import { useState } from "react";

// export default function App() {
//   const [name, setName] = useState();

//   const [isDarkMode, SetIsDarkMode] = useState(false);
//   console.log(isDarkMode);
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.textInput}
//         onChangeText={setName}
//         value={name}
//         autoCapitalize="words"
//         autoComplete="name-family"
//         autoFocus
//         cursorColor="#00000"
//         placeholder="Enter your name"
//       />
//       <Text style={styles.text}>Your Name is {name ? `${name}.` : "..."}</Text>

//       <View style={styles.switchContainer}>
//         <Text>Dark Mode</Text>
//         <Switch
//           value={isDarkMode}
//           onValueChange={() => SetIsDarkMode(!isDarkMode)}
//           trackColor={{ false: "e3e3e3", true: "black" }}
//           thumbColor={"gray"}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e3e3e3",
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
//   textInput: {
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 10,
//     padding: 10,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// });
