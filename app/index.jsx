import { NavigationIndependentTree } from "@react-navigation/native";
import { Provider } from "react-redux";
import RootStack from './navigation/index'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <NavigationIndependentTree>
      <RootStack />
    </NavigationIndependentTree>
    </Provider>
  );
};

export default App;