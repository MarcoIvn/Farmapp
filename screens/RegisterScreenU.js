import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, ScrollView,KeyboardAvoidingView, Alert } from 'react-native';

const CountryCodeModal = ({ isVisible, onSelectCode }) => {
  const countryCodes = [
    { id: 1, code: '52', flag: '🇲🇽', country: 'México' },
    { id: 2, code: '1', flag: '🇺🇸', country: 'EE. UU.' },
    { id: 3, code: '54', flag: '🇦🇷', country: 'Argentina' },
    { id: 4, code: '56', flag: '🇨🇱', country: 'Chile' },
    { id: 5, code: '57', flag: '🇨🇴', country: 'Colombia' },
    { id: 6, code: '58', flag: '🇻🇪', country: 'Venezuela' },
    { id: 7, code: '51', flag: '🇵🇪', country: 'Perú' },
    { id: 8, code: '55', flag: '🇧🇷', country: 'Brasil' },
    { id: 9, code: '593', flag: '🇪🇨', country: 'Ecuador' },
    { id: 10, code: '502', flag: '🇬🇹', country: 'Guatemala' },
    { id: 11, code: '503', flag: '🇸🇻', country: 'El Salvador' },
    { id: 12, code: '505', flag: '🇳🇮', country: 'Nicaragua' },
    { id: 13, code: '506', flag: '🇨🇷', country: 'Costa Rica' },
    { id: 14, code: '507', flag: '🇵🇦', country: 'Panamá' },
    { id: 15, code: '591', flag: '🇧🇴', country: 'Bolivia' },
    { id: 16, code: '598', flag: '🇺🇾', country: 'Uruguay' },
    { id: 17, code: '591', flag: '🇵🇾', country: 'Paraguay' },
    { id: 18, code: '593', flag: '🇵🇦', country: 'Panamá' },
    { id: 19, code: '57', flag: '🇵🇷', country: 'Puerto Rico' },
    { id: 20, code: '34', flag: '🇪🇸', country: 'España' },
    { id: 21, code: '33', flag: '🇫🇷', country: 'Francia' },
    { id: 22, code: '49', flag: '🇩🇪', country: 'Alemania' },
    { id: 23, code: '44', flag: '🇬🇧', country: 'Reino Unido' },
    { id: 24, code: '39', flag: '🇮🇹', country: 'Italia' },
    { id: 25, code: '31', flag: '🇳🇱', country: 'Países Bajos' },
    { id: 26, code: '41', flag: '🇨🇭', country: 'Suiza' },
    { id: 27, code: '46', flag: '🇸🇪', country: 'Suecia' },
    { id: 28, code: '1', flag: '🇨🇦', country: 'Canadá' },
    // Para agregar mas paises despues
  ];

  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, maxHeight: 300 }}>
          <ScrollView>
            {countryCodes.map(country => (
              <TouchableOpacity key={country.id} onPress={() => onSelectCode(country.code)}>
                <Text style={{ fontSize: 20 }}>{country.flag} {country.country} (+{country.code})</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const RegisterScreenU = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  //const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [codigoPais, setCodigoPais] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  //const [genero, setGenero] = useState('');
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [isDayModalVisible, setIsDayModalVisible] = useState(false);
  const [isMonthModalVisible, setIsMonthModalVisible] = useState(false);
  const [isYearModalVisible, setIsYearModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [isGenderModalVisible, setIsGenderModalVisible] = useState(false);

  const handleRegister = () => {
    if (!direccion || !nombres || !apellidos || !selectedDay || !selectedMonth || !selectedYear || !codigoPais || !numeroTelefono || !selectedGender || !email || !password) {
      Alert.alert('Error', 'Por favor, complete todos los campos obligatorios.');
      return;
    }else if(password.length < 6){
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }
    const fechaCompleta = `${selectedYear}-${selectedMonth}-${selectedDay}`;
    const numeroCompleto = `+${codigoPais} ${numeroTelefono}`;
    const genero = `${selectedGender}`;

    console.log('Registrando usuario:', {
      email,
      password,
      direccion,
      nombres,
      apellidos,
      fechaCompleta,
      numeroCompleto,
      genero,
    });
    // Envia los datos al servidor backend
    const userData = {
      email,
      password,
      direccion,
      nombres,
      apellidos,
      fechaCompleta,
      numeroCompleto,
      genero,
    };
    fetch('http://20.127.17.215:3000/registerU', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => {
      // Procesar la respuesta del servidor
      console.log('Respuesta del servidor:', data);
      // Realizar las acciones necesarias después de guardar los datos
      navigation.navigate('LoginU');
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
      // Manejar el error de envío de datos
    });
    //************* */
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setIsDayModalVisible(false);
  };

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setIsMonthModalVisible(false);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setIsYearModalVisible(false);
  };

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    setIsGenderModalVisible(false);
  };

  const handleNumeroTelefonoChange = (text) => {
    // Validación de números de teléfono
    if (/^\d*$/.test(text)) {
      setNumeroTelefono(text);
    }
  };

  const startYear = 1904;
  const endYear = 2004;

  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registre sus Datos:</Text>
      <TextInput
        placeholder="Dirección de envío"
        value={direccion}
        onChangeText={text => setDireccion(text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Nombres"
        value={nombres}
        onChangeText={text => setNombres(text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Apellidos"
        value={apellidos}
        onChangeText={text => setApellidos(text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
      />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setIsDayModalVisible(true)}>
          <Text style={{ borderWidth: 1, padding: 10, width: 60, marginVertical: 10 }}>{selectedDay || 'Día'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsMonthModalVisible(true)}>
          <Text style={{ borderWidth: 1, padding: 10, width: 60, marginVertical: 10 }}>{selectedMonth || 'Mes'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsYearModalVisible(true)}>
          <Text style={{ borderWidth: 1, padding: 10, width: 80, marginVertical: 10 }}>{selectedYear || 'Año'}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => setIsCountryModalVisible(true)}>
        <Text style={{ borderWidth: 1, padding: 15 ,width: 60, marginVertical: 10 }}>{`+${codigoPais}`}</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Número de teléfono"
        keyboardType="numeric"
        value={numeroTelefono}
        onChangeText={handleNumeroTelefonoChange}
        style={{ borderWidth: 1, padding: 10, width: 140, marginVertical: 10 }}
      />
      </View>
      <CountryCodeModal isVisible={isCountryModalVisible} onSelectCode={code => { setCodigoPais(code); setIsCountryModalVisible(false); }} />
      <TouchableOpacity onPress={() => setIsGenderModalVisible(true)}>
        <Text style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}>{selectedGender || 'Género'}</Text>
      </TouchableOpacity>


      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10 }}
      />

      <Modal animationType="slide" transparent visible={isDayModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, maxHeight: 300 }}>
            <ScrollView>
              {Array.from({ length: 31 }, (_, index) => (
                <TouchableOpacity key={index + 1} onPress={() => handleSelectDay(index + 1)}>
                  <Text style={{ fontSize: 20 }}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>


      <Modal animationType="slide" transparent visible={isMonthModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, maxHeight: 300 }}>
            <ScrollView>
              {[
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre',
              ].map((month, index) => {
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
      
      <Modal animationType="slide" transparent visible={isGenderModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 150 }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <ScrollView style={{ maxHeight: 120 }}>
              <TouchableOpacity onPress={() => handleSelectGender('Masculino')}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Masculino</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelectGender('Femenino')}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Femenino</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelectGender('Prefiero no decirlo')}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Prefiero no decirlo</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Button title="Registrarse" onPress={handleRegister} />
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreenU;
