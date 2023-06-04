import React from 'react';
import { View, Text, Button } from 'react-native';

const InicioScreenU = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Farmapp</Text>
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate('LoginU')}
      />
      <Button
        title="Crear cuenta"
        onPress={() => navigation.navigate('RegistroU')}
      />
      <Text style={{ marginTop: 20 }}>¿Eres farmacia?</Text>
      <Text
        style={{ color: 'blue', textDecorationLine: 'underline' }}
        onPress={() => navigation.navigate('InicioF')}
      >
        Inicia sesión o regístrate
      </Text>
    </View>
  );
};

export default InicioScreenU;
