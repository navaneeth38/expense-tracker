import React, { useState } from "react";
import { View, TextInput, Button, Text, Pressable } from "react-native";
import { saveData } from "../utils/storage";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || password.length < 6) {
      alert("Invalid inputs");
      return;
    }
    await saveData("user", { name, email, password });
    navigation.replace("Login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Text>Name:</Text>
      <TextInput 
        style={{
            borderWidth: 0.75,
            marginBottom: 15,
            marginTop: 5,
            borderRadius: 4,
            borderColor: 'lightgray',
            color: 'black',
            paddingHorizontal: 15
          }}
        placeholder='Enter your name'
        value={name} onChangeText={setName} />
      <Text>Email:</Text>
      <TextInput 
       style={{
        borderWidth: 0.75,
        marginBottom: 15,
        marginTop: 5,
        borderRadius: 4,
        borderColor: 'lightgray',
        color: 'black',
        paddingHorizontal: 15
      }}
       placeholder='Enter your mail'
       value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput 
        style={{
            borderWidth: 0.75,
            marginBottom: 15,
            marginTop: 5,
            borderRadius: 4,
            borderColor: 'lightgray',
            color: 'black',
            paddingHorizontal: 15
          }}
        placeholder='Enter your password'
        value={password} onChangeText={setPassword} secureTextEntry />
      <Pressable style={{ backgroundColor: 'lightblue', padding: 8, borderRadius: 5, marginTop: 20, justifyContent: 'center', alignItems: 'center'}} onPress={handleRegister} >
        <Text style={{ fontSize: 15, fontWeight: 'bold'}}>SIGNUP</Text>
      </Pressable>
      <Text onPress={()=> navigation.navigate('Login')}  style={{ marginTop: 10, color: 'blue', alignSelf: 'center'}}>Already have an account ?</Text>
    </View>
  );
};

export default RegisterScreen;
