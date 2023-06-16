import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MainMenuScreenU = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AccountF')}>
        <Image style={styles.topImage} source={require('../assets/User.png')} />
      </TouchableOpacity>


      <View style={styles.logoContainer}>
        <Image style={styles.cornerImage} source={require('../assets/LogoF.png')} />
      </View>

      <View style={styles.contentContainer}>
        <Image style={styles.itemImager} source={require('../assets/farmacia1.png')} />    
        <Text style={styles.title}>Tu Farmacia</Text>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('InventarioF')}>
          <Image style={styles.itemImage} source={require('../assets/Catalogo.png')} />
          <Text style={styles.itemText}>Catálogo de productos</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PedidosF')}>
          <Image style={styles.itemImage} source={require('../assets/Pedidos.png')} />
          <Text style={styles.itemText}>Tus envios</Text>
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
    top:25
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
    marginBottom: 150,
  },
  title: {
    fontSize: 52,
    marginBottom: 70,
    top: 30,
    left: 0,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  itemImage: {
    resizeMode: 'center',
    left: 5,
    width: 150,
    height: 190,
  },
  itemImager: {
    resizeMode: 'center',
    top: 45,
    width: 160,
    height: 130,
    right: 0,
  },
  itemText: {
    left: 0,
    
    fontSize: 28,
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
