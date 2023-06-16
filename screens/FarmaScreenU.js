import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const FarmaScreenU = ({ navigation, route }) => {
  const { farmaciaId } = route.params;
  const { farmaciaNombre } = route.params;
  console.log(farmaciaId)
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await fetch(`http://20.127.17.215:3000/getProductos?idFarmacia=${farmaciaId}`);
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const agregarAlCarrito = (index) => {
    const productoSeleccionado = productos[index];
    setCarrito([...carrito, productoSeleccionado]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AccountU')}>
        <Image style={styles.topImage} source={require('../assets/User.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MainMenuU')}>
        <View style={styles.logoContainer}>
          <Image style={styles.cornerImage} source={require('../assets/LogoF.png')} />
        </View>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Image style={styles.itemImager} source={require('../assets/farmacia1.png')} />
        <Text style={styles.title}>{farmaciaNombre}</Text>

        {productos.map((producto, index) => (
          <View key={producto.id}>
            <TouchableOpacity style={styles.item} onPress={() => agregarAlCarrito(index)}>
              <Image style={styles.itemImage} source={{ uri: producto.imagen }} />
              <Text style={styles.itemText}>{producto.nombre}</Text>
              <Text style={styles.itemSubtext}>Descripcion</Text>
              {/* Mas campos */}
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('CarritoU', { carrito, route: route })}>
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
    fontSize: 40,
    marginBottom: 20,
    left: 30,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: -50,
  },
  itemImage: {
    right: 150,
    top: 65,
    width: 50,
    height: 70,
  },
  itemImager: {
    resizeMode: 'center',
    top: 90,
    width: 80,
    height: 130,
    right: 140,
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

export default FarmaScreenU;
