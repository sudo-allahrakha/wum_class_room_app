import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Intro() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to WUM Class Room App</Text>
      <Text style={styles.subtitle}>
        Your gateway to seamless classroom management and student engagement. Join
        us to experience a smarter way to learn and teach!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 32,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 26,
    maxWidth: 340,
  },
  button: {
    backgroundColor: "#FF5A5F",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 28,
    shadowColor: "#FF5A5F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
