import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <View style={styles.title__view}>
        <Text style={styles.title__text}>Your scooter</Text>
        <Text style={styles.title__text}>in one app</Text>
      </View>
      <Image
        style={styles.main__image}
        source={require("../assets/illustration.png")}
      />
      <Text style={styles.description__text}>
        Everything you need to know about your scooter is available here in your
        app
      </Text>
      <TouchableOpacity
        style={styles.button__image}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image source={require("../assets/get_started.png")} />
      </TouchableOpacity>
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
