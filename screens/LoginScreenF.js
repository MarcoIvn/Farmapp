import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
const LoginScreenF = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Aquí puedes agregar la lógica para manejar la autenticación del usuario
    };
  
    return (
      <View>
        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </View>
    );
  };
  
  export default LoginScreenF;
  