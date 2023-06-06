import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

const PedidosScreenU = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <View style={styles.contentContainer}>
        <Image style={styles.itemImager} source={require('../assets/User.png')} />    
        <Text style={styles.title}>Su pedido llegara pronto!</Text>

        <TouchableOpacity style={styles.item}>
        <Image style={styles.itemImage} source={require('../assets/farmacia1.png')} />
        <Text style={styles.itemText}>Su pedido se enviara a:</Text>
        <Text style={styles.itemText}>Domicilio X</Text>
        
      </TouchableOpacity>

      <Image style={styles.itemImage} source={require('../assets/Check.png')} />
        <Text style={styles.itemText}>Entrega estimada : XX:XX</Text>


      <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('MainMenuU')}>
        <Text style={styles.paymentButtonText}>Regresar</Text>
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
    marginTop: 100,
    marginBottom: 340,
  },
  title: {
    fontSize: 24,
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
    top: 60,
    width: 70,
    height: 70,
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

export default PedidosScreenU;
