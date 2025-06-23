import React, { useRef } from "react";
import { Alert, Button, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";

function OtpScreen() {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, idx) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[idx] = text;
      setOtp(newOtp);
      if (text && idx < 5) {
        inputs.current[idx + 1].focus();
      }
      if (!text && idx > 0) {
        inputs.current[idx - 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    if (otp.every((digit) => digit !== "")) {
      Alert.alert("OTP Entered", otp.join(""));
    } else {
      Alert.alert("Incomplete OTP", "Please enter all 6 digits.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={40}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Enter the 6-digit code</Text>
        <Text style={styles.infoText}>We sent a code to your phone number. Please enter it below to continue.</Text>
        <View style={styles.otpRow}>
          {otp.map((digit, idx) => (
            <TextInput
              key={idx}
              ref={el => (inputs.current[idx] = el)}
              style={styles.otpInputBox}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, idx)}
              autoFocus={idx === 0}
              returnKeyType="next"
              placeholder="-"
              placeholderTextColor="#ccc"
            />
          ))}
        </View>
        <Button title="Verify OTP" onPress={handleSubmit} color="#FF5A5F" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 28,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 300,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32,
  },
  otpInputBox: {
    width: 44,
    height: 56,
    borderWidth: 2,
    borderColor: "#FF5A5F",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 32,
    marginHorizontal: 6,
    backgroundColor: "#fafafa",
    color: "#222",
    fontWeight: "600",
  },
});

export default OtpScreen;