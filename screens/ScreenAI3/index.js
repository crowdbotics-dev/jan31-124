import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline'
  }
});
export default LoginScreen;