import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import img from "./assets/Screenshot (21).png";
import img2 from "./assets/adaptive-icon.png";
import { useState } from "react";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <ScrollView>
        <Text>Hello World!</Text>
        <ImageBackground
          source={img2}
          style={{ flex: 1, width: 100, height: 100 }}
        >
          <Image source={img} style={{ width: 50, height: 50 }} />
        </ImageBackground>
        <Button title="Open Modal" onPress={() => setOpenModal(true)} />

        <Modal visible={openModal} onRequestClose={() => setOpenModal(false)}>
          <View>
            <Text>Hello World</Text>
            <Pressable
              style={{
                marginTop: 10,
                borderColor: "blue",
                borderStyle: "solid",
                borderWidth: 1,
                padding: 10,
              }}
            >
              <Text onPress={() => setOpenModal(false)}>Close Modal</Text>
            </Pressable>
          </View>
        </Modal>

        <StatusBar backgroundColor={"blue"} animated barStyle={"default"} />
      </ScrollView>
    </View>
  );
};

export default App;
