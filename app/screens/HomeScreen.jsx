import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../utils/storage";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const transactions = useSelector((state) => state.expense.transactions);

  const userTransactions = user ? transactions.filter(tx => tx.userEmail === user.email) : [];

const handleLogout = async () => {
  await removeData('Session'); 
  dispatch({ type: 'LOGOUT' });
  navigation.navigate('Login');
};


  const handleDeleteExpense = (id) => {
    Alert.alert(
      "Delete Expense",
      "Are you sure you want to delete this expense?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => dispatch({ type: "DELETE_EXPENSE", payload: id }),
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Welcome, {user?.name}
      </Text>

      {/* Transactions List */}
      <Text style={{ fontSize: 18, marginTop: 20 }}>Your Transactions:</Text>
      {transactions.length === 0 ? (
        <Text style={{ marginTop: 10 }}>No transactions added yet.</Text>
      ) : (
        <>
          <FlatList
            data={userTransactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  borderBottomWidth: 1,
                }}
              >
                <Text>{item.title}</Text>
                <Text>${item.amount}</Text>
                <TouchableOpacity onPress={() => handleDeleteExpense(item.id)}>
                  <Text style={{ color: "red" }}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </>
      )}

      {/* Add Transaction Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AddExpense")}
        style={{
          marginTop: 20,
          backgroundColor: "#007bff",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Add Transaction</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 20,
          backgroundColor: "#ff4444",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
