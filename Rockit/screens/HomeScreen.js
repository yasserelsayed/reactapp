import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title__text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#55418E",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title__text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  title__view: {
    marginTop: 30,
  },
  main__image: {
    margin: 30,
  },
  description__text: {
    textAlign: "center",
    paddingStart: 40,
    paddingEnd: 40,
    color: "white",
    fontSize: 18,
  },
  button__image: {
    marginTop: 25,
    alignSelf: "flex-end",
  },
});
