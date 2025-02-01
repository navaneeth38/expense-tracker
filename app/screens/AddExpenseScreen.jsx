import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const AddExpenseScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  // Get the logged-in user from Redux state
  const user = useSelector((state) => state.auth.user);

  const handleAddExpense = () => {
    if (!title || !amount) {
      alert('Please enter all details');
      return;
    }
  
    if (!user) {
      alert('User not logged in');
      return;
    }
  
    dispatch({
      type: 'ADD_EXPENSE',
      payload: { 
        id: Date.now(), 
        title, 
        amount, 
        userEmail: user?.email 
      }
    });
  
    navigation.goBack();
  
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

export default AddExpenseScreen;
