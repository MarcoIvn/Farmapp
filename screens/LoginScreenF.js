import React, { useState, useContext, useEffect} from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert} from 'react-native';
import UserContext from '../UserContext';

const LoginScreenF = ({ navigation , route}) => {
  useEffect(() => {
    if (route.params?.fromRegistrationF) {
      // Navegar a la pantalla de inicio
      navigation.navigate('InicioF');
    }
  }, [route.params]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(UserContext);

  const handleLogin = () => {
    // Autenticación del usuario
    fetch('http://20.127.17.215:3000/loginF', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error en la solicitud');
        }
      })
      .then(data => {
        // Procesar la respuesta del servidor
        console.log('Respuesta del servidor:', data);
        if (data.userData) {
          setUserData(data.userData); // Almacenar los datos del usuario en el contexto IMPORTANTE
          Alert.alert('Inicio de sesión exitoso');
          navigation.navigate('MainMenuF');
        } else {
          console.error('Error al iniciar sesión:', data.error);
          // Manejar el error de inicio de sesión
        }
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        Alert.alert('Error al iniciar sesión, Usuario o Contraseña no validos');
      });
    
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoF.png')} style={styles.logoImage} />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  logoImage: {
    
    width: 200,
    height: 200,
    marginBottom: 20,
    
  },
});

export default LoginScreenF;
