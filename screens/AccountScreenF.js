import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import UserContext from '../UserContext';

const AccountScreenU = ({ navigation }) => {

  const { userData } = useContext(UserContext); // Obtener los datos del usuario del contexto
  console.log("Contexto datos usuario: ", userData);
  const [farmaciaData, setFarmaciaData] = useState(null);

  const obtenerDatosFarmacia = async () => {
  try {
    const response = await fetch(`http://20.127.17.215:3000/getFarmacia?propietarioId=${userData.id}`);
    const data = await response.json();
    setFarmaciaData(data[0]);
  } catch (error) {
    console.error('Error al obtener los datos de la farmacia:', error);
  }
};
useEffect(() => {
  obtenerDatosFarmacia();
}, [userData.id]);

if (!farmaciaData) {
  return <Text>Cargando datos de la farmacia...</Text>;
}
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainMenuF')}>
        <View style={styles.logoContainer}>
          <Image style={styles.cornerImage} source={require('../assets/LogoF.png')} />
        </View>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Image style={styles.itemImager} source={require('../assets/User.png')} />
        <Text style={styles.title}>Cuenta info</Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Farmacia:</Text>
            <Text style={styles.tableValue}>{farmaciaData.nombre}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Dueño</Text>
            <Text style={styles.tableValue}>{userData.nombres} {userData.apellidos}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Dirección:</Text>
            <Text style={styles.tableValue}>{userData.direccion}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Rango:</Text>
            <Text style={styles.tableValue}>{farmaciaData.rango ? farmaciaData.rango : 'Sin rango'}</Text>
          </View>

        </View>
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
  logoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 5,
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
  itemImager: {
    resizeMode: 'center',
    top: 80,
    width: 50,
    height: 130,
    right: 150,
  },
  tableContainer: {
    borderWidth: 1,
    width: 350,
    height: 250,
    marginTop: 20,
    borderColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  tableLabel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tableValue: {},
});

export default AccountScreenU;
