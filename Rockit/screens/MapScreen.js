import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import react, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [erroMsg, setErrorMessage] = useState(null);
  const [region, setRegion] = useState({
    latitude: 56.843747,
    longitude: 60.653813,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location !== null) {
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      });
    }
  }, [location]);
  let text = erroMsg
    ? erroMsg
    : location
    ? JSON.stringify(location)
    : "waiting";
  return (
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
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Whitney Leon</Text>
          <Text style={{ color: "grey" }}>Welcome back!</Text>
        </View>
        <Image source={require("../assets/dots.png")} />
      </View>
      <Card style={styles.mapContainer}>
        <Text style={styles.mapTitle}>Scooter Location</Text>
        <MapView style={styles.map} region={region} />
      </Card>
    </View>
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
  map: {
    marginBottom: 20,
    alignSelf: "center",
    flexShrink: 1,
    width: 300,
    height: 600,
  },
  mapContainer: {
    width: 330,
    height: 630,
    marginTop: 30,
    borderRadius: 25,
    elevation: 1,
  },
  mapTitle: {
    fontWeight: "bold",
    color: "#55418E",
    margin: 20,
  },
});
