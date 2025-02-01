import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const AddExpenseScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: { id: Date.now(), title, amount },
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