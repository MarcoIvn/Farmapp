import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PlanFScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoF.png')} style={styles.logoImage} />
      <Text style={styles.title}>¡CONOCE NUESTRO PLAN Y ÚNETE!</Text>
      <Text style={styles.subtitle}>Crece tu negocio con pedidos y entregas a domicilio</Text>
      <Text style={styles.price}>700$ MENSUALES</Text>

      <Text style={styles.feature}>* TU FARMACIA EN UNA APLICACIÓN</Text>
      <Text style={styles.feature}>* PAGOS DIGITALES PARA TUS CLIENTES</Text>
      <Text style={styles.feature}>* SOLO PREOCÚPATE POR TENER LOS PEDIDOS EN LA PUERTA</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegistroF')}
      >
        <Text style={styles.buttonText}>ÚNETE</Text>
      </TouchableOpacity>
      <Text style={styles.memberText}>¿Ya eres parte de Farmapp?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginF')}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  feature: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'justify',
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
  memberText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default PlanFScreen;
