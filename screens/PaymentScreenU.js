import React,{ useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';

const PaymentScreenU = ({ navigation,route }) => {
  const { numProductos } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
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
            <Image style={styles.itemImager} source={require('../assets/Carrito.png')} />    
            <Text style={styles.title}>Carrito de compras</Text>
    
            {/* Tabla */}
            <View style={styles.table}>
              <View style={styles.row}>
                <Text style={styles.cellTitle}>Resumen de Pago</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.cellTitle}>Num. Productos: {numProductos}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cellTitle}>Total: $$</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cellTitle}>Comisión: $</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cellTitle}>Total a pagar: $$$</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cellTitle}>Metodo de pago: Tarjeta con terminacion xxxx</Text>
              </View>
            </View>
    
            {/* Botón "Pagar" */}
            <TouchableOpacity style={styles.paymentButtonOrange} onPress={toggleModal}>
              <Text style={styles.paymentButtonText}>Pagar</Text>
            </TouchableOpacity>
          </View>
    
          {/* Modal */}
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View style={styles.modalContent}>
              <Image style={styles.modalImage} source={require('../assets/Check.png')} />
              <Text style={styles.modalText}>Pago exitoso</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('StatusU')}>
                <Text style={styles.modalButtonText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
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
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cellTitle: {
    flex: 1,
    fontSize: 16,
  },
  paymentButtonOrange: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentScreenU;
