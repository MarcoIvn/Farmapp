import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreenU from './screens/InicioScreenU.js';
import InicioScreenF from './screens/InicioScreenF.js';
import LoginScreenU from './screens/LoginScreenU.js';
import RegistroScreenU from './screens/RegisterScreenU.js';
import LoginScreenF from './screens/LoginScreenF.js';
import RegistroScreenF from './screens/RegisterScreenF.js';
import MainMenuScreenU from './screens/MainMenuScreenU.js';
import MainMenuScreenF from './screens/MainMenuScreenF.js';
import FarmaScreenU from './screens/FarmaScreenU.js';
import InvetarioScreenF from './screens/InvetarioScreenF.js';
import PedidosScreenF from './screens/PedidosScreenF.js';
import PedidosScreenU from './screens/PedidosScreenU.js';
import AccountScreenU from './screens/AccountScreenU.js';
import AccountScreenF from './screens/AccountScreenF.js';
import CarritoScreenU from './screens/CarritoScreenU.js';
import PaymentScreenU from './screens/PaymentScreenU.js';
import StatusScreenU from './screens/StatusScreenU.js';
import MoneyScreenU from './screens/MoneyScreenU.js';
import UserContext from './UserContext.js';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="InicioU" component={InicioScreenU} options={{ headerShown: false,gestureEnabled: false, }}/>
          <Stack.Screen name="InicioF" component={InicioScreenF} options={{ headerShown: false, gestureEnabled: false,}}/>
          <Stack.Screen name="LoginU" component={LoginScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="RegistroU" component={RegistroScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="LoginF" component={LoginScreenF} options={{ headerShown: false }}/>
          <Stack.Screen name="RegistroF" component={RegistroScreenF} options={{ headerShown: false }} />
          <Stack.Screen name="MainMenuU" component={MainMenuScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="MainMenuF" component={MainMenuScreenF} options={{ headerShown: false }}/>
          <Stack.Screen name="FarmaU" component={FarmaScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="InventarioF" component={InvetarioScreenF} options={{ headerShown: false }}/>
          <Stack.Screen name="PedidosF" component={PedidosScreenF} options={{ headerShown: false }}/>
          <Stack.Screen name="PedidosU" component={PedidosScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="AccountU" component={AccountScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="AccountF" component={AccountScreenF} options={{ headerShown: false }}/>
          <Stack.Screen name="CarritoU" component={CarritoScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="PaymentU" component={PaymentScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="StatusU" component={StatusScreenU} options={{ headerShown: false }}/>
          <Stack.Screen name="MoneyU" component={MoneyScreenU} options={{ headerShown: false }}/>

        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
