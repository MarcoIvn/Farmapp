import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, FlatList } from 'react-native';

const CarritoScreenU = ({ navigation, route }) => {
  const { carrito } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.itemImage} source={{ uri: item.imagen }} />
      <Text style={styles.itemText}>{item.nombre}</Text>
      {/* Resto del contenido */}
    </TouchableOpacity>
  );

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
        <Image style={styles.itemImager} source={require('../assets/Carrito.png')} />
        <Text style={styles.title}>Carrito de compras</Text>

        <FlatList
          data={carrito}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />

        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate('PaymentU', { numProductos: carrito.length })}
        >
          <Text style={styles.paymentButtonText}>Ir a pagar</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 10,
    marginBottom: 200,
    
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
    right: 120,
    top: 65,
    width: 80,
    height: 150,
  },
  itemImager: {
    resizeMode: 'center',
    top: 80,
    width: 80,
    height: 130,
    right: 150,
  },
  itemText: {
    marginLeft: 50,
    fontSize: 24,
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
  paymentButton: {
    backgroundColor: 'navy',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    top: 130,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CarritoScreenU;
