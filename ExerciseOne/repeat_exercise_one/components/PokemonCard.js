import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  const { width } = useWindowDimensions();

  const getTypeDetails = (arg) => {
    switch (arg.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

  const { borderColor, emoji } = getTypeDetails(type);
  return (
    // <View
    //   style={{
    //     width: "100%",
    //     flexDirection: "row",
    //     flex: 1,
    //     alignContent: "flex-start",
    //   }}
    // >
    <View style={[styles.container, { width: width > 500 ? "50%" : "100%" }]}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>
      <Image style={styles.img} source={image} />
      <View style={styles.btnContainer}>
        <Text style={[styles.btn, { borderColor: borderColor }]}>
          {emoji} {type}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Moves: {moves.join(", ")}</Text>
        <Text style={styles.textOne}>Weaknesses: {weaknesses.join(", ")}</Text>
      </View>
    </View>
    // </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 16,
  },
  nameContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 18,
    fontWeight: "500",
  },
  img: {
    width: "auto",
    height: 200,
    objectFit: "contain",
    marginBottom: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  btn: {
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  textContainer: {
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  textOne: {
    fontSize: 18,
    fontWeight: "500",
  },
});
