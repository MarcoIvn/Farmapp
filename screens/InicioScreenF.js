import React from 'react';
import { View, Text, Button } from 'react-native';

const PlanFScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡CONOCE NUESTRO PLAN Y UNETE!</Text>
      <Text>Crece tu negocio con pedidos y entregas a domicilio</Text>
      <Text>700$ MENSUALES</Text>

      <Text>* TU FARMACIA EN UNA APLICACIÓN</Text>
      <Text>* PAGOS DIGITALES PARA TUS CLIENTES</Text>
      <Text>* SOLO PREOCÚPATE POR TENER LOS PEDIDOS EN LA PUERTA</Text>
      
      <Button
        title="ÚNETE"
        onPress={() => navigation.navigate('RegistroF')}
      />
      <Text>¿Ya eres parte de farmapp?</Text>
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate('LoginF')}
      />
    </View>
  );
};

export default PlanFScreen;