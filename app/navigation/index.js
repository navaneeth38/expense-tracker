import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AddExpenseScreen, HomeScreen, LoginScreen, RegisterScreen} from "../screens";


const Stack = createNativeStackNavigator();;

function RootStack() {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      </Stack.Navigator>
  );
}
export default RootStack