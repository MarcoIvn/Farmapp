import React from 'react';
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


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InicioU" component={InicioScreenU} />
        <Stack.Screen name="InicioF" component={InicioScreenF} />
        <Stack.Screen name="LoginU" component={LoginScreenU} />
        <Stack.Screen name="RegistroU" component={RegistroScreenU} />
        <Stack.Screen name="LoginF" component={LoginScreenF} />
        <Stack.Screen name="RegistroF" component={RegistroScreenF} />
        <Stack.Screen name="MainMenuU" component={MainMenuScreenU} />
        <Stack.Screen name="MainMenuF" component={MainMenuScreenF} />
        <Stack.Screen name="FarmaU" component={FarmaScreenU} />
        <Stack.Screen name="InventarioF" component={InvetarioScreenF} />
        <Stack.Screen name="PedidosF" component={PedidosScreenF} />
        <Stack.Screen name="PedidosU" component={PedidosScreenU} />
        <Stack.Screen name="AccountU" component={AccountScreenU} />
        <Stack.Screen name="AccountF" component={AccountScreenF} />
        <Stack.Screen name="CarritoU" component={CarritoScreenU} />
        <Stack.Screen name="PaymentU" component={PaymentScreenU} />
        <Stack.Screen name="StatusU" component={StatusScreenU} />
        <Stack.Screen name="MoneyU" component={MoneyScreenU} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
