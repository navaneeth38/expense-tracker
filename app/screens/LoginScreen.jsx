import React, { useState } from 'react';
import { View, TextInput, Button, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveData, getData } from '../utils/storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const storedUser = await getData('user');
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      dispatch({ type: 'LOGIN', payload: storedUser });
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
      <Text style={{ fontSize: 15, marginBottom: 10, fontWeight: 'semibold'}}>Email:</Text>
      <TextInput style={{
        borderWidth: 0.75,
        marginBottom: 15,
        borderRadius: 4,
        borderColor: 'lightgray',
        color: 'black',
        paddingHorizontal: 15
      }} 
      placeholder='Enter your mail'
      value={email} 
      onChangeText={setEmail} />
      <Text style={{ fontSize: 15, marginBottom: 10, fontWeight: 'semibold'}}>Password:</Text>
      <TextInput style={{
        borderWidth: 0.75,
        marginBottom: 15,
        borderRadius: 4,
        borderColor: 'lightgray',
        color: 'black',
        paddingHorizontal: 15
      }}
       placeholder='Passsword'
       value={password} onChangeText={setPassword} secureTextEntry />
      <Pressable
       style={{ backgroundColor: 'lightblue', padding: 8, borderRadius: 5, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
       onPress={handleLogin}>
        <Text style={{ fontSize: 15, fontWeight: 'bold'}}>LOGIN</Text>
      </Pressable>
      <Pressable style={{ alignItems: 'center'}} onPress={()=> navigation.navigate('Register')}>
       <Text style={{ color: 'blue', marginTop: 10}}>Register</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
