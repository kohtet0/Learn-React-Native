import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetail = (arg) => {
  switch (arg.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡" };

    case "water":
      return { borderColor: "#6493EA", emoji: "💦" };

    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };

    case "grass":
      return { borderColor: "#66CC66", emoji: "🌾" };

    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
      break;
  }
};

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  const { borderColor, emoji } = getTypeDetail(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image style={styles.image} source={image} />

      <View style={styles.container}>
        <View
          style={[
            styles.btnContainer,
            { borderColor: borderColor, borderWidth: 2 },
          ]}
        >
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.text}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves : {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessesText}>{weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 15,
    ...Platform.select({
      ios: {},
      android: {
        elevation: 8,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 20,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "contain",
    marginBottom: 16,
  },
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 16,
  },
  emoji: {
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  movesContainer: {
    marginBottom: 10,
  },
  movesText: {
    fontSize: 25,
    fontWeight: "500",
  },

  weaknessesText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
