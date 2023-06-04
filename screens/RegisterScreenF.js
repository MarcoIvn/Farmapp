import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreenF = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para realizar el registro del usuario
    console.log('Registrando usuario:', email, password);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registre sus Datos:</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
      />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreenF;
