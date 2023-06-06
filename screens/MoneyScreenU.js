import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert, Image } from 'react-native';

const MoneyScreenU = ({ navigation }) => {
  const [direccion, setDireccion] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isMonthModalVisible, setIsMonthModalVisible] = useState(false);
  const [isYearModalVisible, setIsYearModalVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    if (!direccion || !nombres || !apellidos || !selectedMonth || !selectedYear) {
      Alert.alert('Error', 'Por favor, complete todos los campos obligatorios.');
      return;
    } else if (apellidos.length !== 3) {
      Alert.alert('Error', 'El CVV debe tener 3 dígitos.');
      return;
    }

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
            value={direccion}
            onChangeText={(text) => setDireccion(text)}
            style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
          />
          <TextInput
            placeholder="Numero de tarjeta"
            value={nombres}
            onChangeText={(text) => setNombres(text)}
            style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
          />
          <TextInput
            placeholder="CVV"
            value={apellidos}
            onChangeText={(text) => setApellidos(text)}
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
