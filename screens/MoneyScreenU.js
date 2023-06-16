import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert, Image } from 'react-native';
import UserContext from '../UserContext';


const MoneyScreenU = ({ navigation }) => {
  const [banco, setBanco] = useState('');
  const [titular_cuenta, setTitularCuenta] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [cvv, setCvv] = useState('');
  const [numero_tarjeta, setNumerotarjeta] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isMonthModalVisible, setIsMonthModalVisible] = useState(false);
  const [isYearModalVisible, setIsYearModalVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const { userData } = useContext(UserContext); // Obtener los datos del usuario del contexto
  console.log("Contexto datos usuario: ", userData);

  const handleRegister = () => {
    if (!titular_cuenta || !numero_tarjeta || !cvv || !selectedMonth || !selectedYear) {
      Alert.alert('Error', 'Por favor, complete todos los campos obligatorios.');
      return;
    } else if (cvv.length !== 3) {
      Alert.alert('Error', 'El CVV debe tener 3 dígitos.');
      return;
    }
    const expiracion = `${selectedMonth}-${selectedYear}`;
    const data = {
      numero_tarjeta: numero_tarjeta,
      titular_cuenta: titular_cuenta,
      expiracion: expiracion,
      codigo_seguridad: cvv,
      banco: banco,
      userId: userData.id,
    };

    fetch('http://20.127.17.215:3000/registerBIU', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      // Procesar la respuesta del servidor
      console.log('Respuesta del servidor:', responseJson);
      // Realizar las acciones necesarias después de guardar los datos
      if (responseJson.message === 'Información bancaria registrada exitosamente') {
        setIsRegistered(true);
        // Aquí podrías realizar otras acciones o mostrar una confirmación al usuario
      }
    })
    .catch((error) => {
      console.error('Error al enviar los datos:', error);
      // Manejar el error de envío de datos
    });

    setIsRegistered(true);
  };

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setIsMonthModalVisible(false);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setIsYearModalVisible(false);
  };

  const startYear = 2023;
  const endYear = 2030;

  const goToMainMenu = () => {
    navigation.navigate('MainMenuU');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Registre sus Datos:</Text>
          <TextInput
            placeholder="Banco"
            value={banco}
            onChangeText={(text) => setBanco(text)}
            style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
          />
          <TextInput
            placeholder="titular_cuenta"
            value={titular_cuenta}
            onChangeText={(text) => setTitularCuenta(text)}
            style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
          />
          <TextInput
            placeholder="Numero de tarjeta"
            value={numero_tarjeta}
            onChangeText={(text) => setNumerotarjeta(text)}
            style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
          />
          <TextInput
            placeholder="CVV"
            value={cvv}
            onChangeText={(text) => setCvv(text)}
            style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
          />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setIsMonthModalVisible(true)}>
              <Text style={{ borderWidth: 1, padding: 10, width: 60, marginVertical: 10 }}>{selectedMonth || 'Mes'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsYearModalVisible(true)}>
              <Text style={{ borderWidth: 1, padding: 10, width: 80, marginVertical: 10 }}>{selectedYear || 'Año'}</Text>
            </TouchableOpacity>
          </View>

          <Modal animationType="slide" transparent visible={isMonthModalVisible}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, maxHeight: 300 }}>
                <ScrollView>
                  {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((month, index) => {
                    const monthNumber = (index + 1).toString().padStart(2, '0');
                    return (
                      <TouchableOpacity key={index + 1} onPress={() => handleSelectMonth(monthNumber)}>
                        <Text style={{ fontSize: 20 }}>{month}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </Modal>

          <Modal animationType="slide" transparent visible={isYearModalVisible}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, maxHeight: 300 }}>
                <ScrollView>
                  {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
                    <TouchableOpacity key={index + startYear} onPress={() => handleSelectYear(startYear + index)}>
                      <Text style={{ fontSize: 20 }}>{startYear + index}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>

          {!isRegistered ? (
            <Button title="Registrarse" onPress={handleRegister} />
          ) : (
            <Modal animationType="slide" transparent visible={isRegistered}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                  <Image source={require('../assets/Check.png')} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                  <Text>Tarjeta registrada</Text>
                  <TouchableOpacity onPress={goToMainMenu} style={{ marginTop: 20 }}>
                    <Text style={{ color: 'blue' }}>Menú principal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MoneyScreenU;
