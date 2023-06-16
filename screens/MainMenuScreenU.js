import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MainMenuScreenU = ({ navigation }) => {

  const [farmacias, setFarmacias] = useState([]);
  useEffect(() => {
    obtenerFarmacias();
  }, []);

  const obtenerFarmacias = async () => {
    try {
      const response = await fetch('http://20.127.17.215:3000/getFarmacias');
      const data = await response.json();
      setFarmacias(data);
    } catch (error) {
      console.error('Error al obtener las farmacias:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Resto del código... */}
      <View style={styles.contentContainer}>
        <Image style={styles.itemImager} source={require('../assets/Ubicacion.png')} />
        <Text style={styles.title}>Farmacias cerca de mí</Text>

        {farmacias.map((farmacia) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('FarmaU', { farmaciaId: farmacia.id, farmaciaNombre: farmacia.nombre })}
            key={farmacia.id}
          >
            {/* Aquí puedes utilizar los campos de la farmacia para mostrar la información */}
            <Image style={styles.itemImage} source={require('../assets/farmacia1.png')} />
            <Text style={styles.itemText}>{farmacia.nombre}</Text>
            <Text style={styles.itemSubtext}>Tiempo de espera: 10 minutos</Text>
          </TouchableOpacity>
          
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CarritoU')}>
      <Image style={styles.bottomImage} source={require('../assets/Carrito.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  topImage: {
    width: '100%',
    height: 50,
    resizeMode: 'center',
    position: 'absolute',
    top: 5,
    left: 180,
    zIndex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 20,
    padding: 10,
    zIndex: 2,
  },
  cornerImage: {
    top: -9,
    width: 40,
    height: 40,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 340,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    left: 30,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: -10,
  },
  itemImage: {
    right: 150,
    top: 65,
    width: 70,
    height: 70,
  },
  itemImager: {
    resizeMode: 'center',
    top: 80,
    width: 50,
    height: 130,
    right: 150,
  },
  itemText: {
    marginLeft: 50,
    fontSize: 32,
  },
  itemSubtext: {
    marginLeft: 50,
    fontSize: 18,
    color: 'gray',
  },
  bottomImage: {
    width: '100%',
    height: 100,
    resizeMode: 'center',
    position: 'absolute',
    bottom: 0,
    left: 15,
    zIndex: 1,
  },
});

export default MainMenuScreenU;
