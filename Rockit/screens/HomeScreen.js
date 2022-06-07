import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/profile.png")} />
          <View style={{ flex: 1, marginStart: 30, flexDirection: "column" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Whitney Leon
            </Text>
            <Text style={{ color: "grey" }}>Welcome back!</Text>
          </View>
          <Image source={require("../assets/dots.png")} />
        </View>
        <ImageBackground
          resizeMode="contain"
          style={styles.description}
          source={require("../assets/updated.png")}
        >
          <View style={styles.description_content}>
            <Text style={styles.description_title}>We update your scooter</Text>
            <Text style={styles.description_text}>
              Every thing your scooter needed,we did it for you.
            </Text>
          </View>
          <TouchableOpacity style={{ marginStart: 40 }} onPress={() => {}}>
            <Image source={require("../assets/close.png")} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.card}>
          <TouchableOpacity style={{ marginStart: 40 }} onPress={() => {}}>
            <View style={{ flexDirection: "row", width: 300 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.description_title}>Whitney's scooter</Text>
                <Text style={styles.description_text}>Location</Text>
              </View>
              <Image source={require("../assets/maps.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={styles.cell}>
            <Text style={styles.cell_title}>Total distance</Text>
            <Image style={styles.icon} source={require("../assets/map.png")} />
            <Text style={styles.cell_desc}>17.8 km</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cell_title}>Total battery</Text>
            <Image
              style={styles.icon}
              source={require("../assets/charging.png")}
            />
            <Text style={styles.cell_desc}>100%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", margin: 10, marginTop: -10 }}>
          <View style={styles.cell}>
            <Text style={styles.cell_title}>Average Speed</Text>
            <Image
              style={styles.icon}
              source={require("../assets/zapon.jpg")}
            />
            <Text style={styles.cell_desc}>45 km</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cell_title}>Ride updated</Text>
            <Image
              style={styles.icon}
              source={require("../assets/share.png")}
            />
            <Text style={styles.cell_desc}>1 day ago</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    margin: 20,
  },
  description: {
    padding: 50,
    height: 300,
    width: 300,
    flexDirection: "row",
  },
  description_content: {
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 50,
  },
  description_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  description_text: {
    fontSize: 14,
    color: "white",
    textAlign: "left",
  },
  card: {
    backgroundColor: "#ffa500",
    borderRadius: 20,
    padding: 20,
  },
  cell: {
    padding: 10,
    width: 150,
    height: 150,
    margin: 10,
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
  },
  cell_title: {
    color: "#55418E",
  },
  cell_desc: {
    color: "#ffa500",
  },
  icon: {
    marginBottom: 10,
    marginTop: 10,
  },
});
