import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const InicioScreenU = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoF.png')} style={styles.logoImage} />
      <Text style={styles.logo}>Farmapp</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={() => navigation.navigate('LoginU')}
      >
        <Text style={[styles.buttonText, { color: '#333' }]}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={() => navigation.navigate('RegistroU')}
      >
        <Text style={[styles.buttonText, { color: '#333' }]}>Crear cuenta</Text>
      </TouchableOpacity>
      <Text style={styles.farmaciaText}>¿Eres una farmacia?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('InicioF')}
      >
        <Text style={styles.linkText}>Inicia sesión o regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000080', // Fondo azul marino
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff', // Texto blanco
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  farmaciaText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff', // Texto blanco
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default InicioScreenU;
