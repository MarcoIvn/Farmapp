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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
