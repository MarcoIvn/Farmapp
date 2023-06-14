import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, ScrollView,KeyboardAvoidingView, Alert, Platform } from 'react-native';

// Primer formulario
const FirstFormScreen = ({formData, onNext }) => {

  const CountryCodeModal = ({ isVisible, onSelectCode }) => {
    const countryCodes = [
      { id: 1, code: '52', flag: '🇲🇽', country: 'México' },
      { id: 2, code: '1', flag: '🇺🇸', country: 'EE. UU.' },
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


  const [email, setEmail] = useState(formData?.email || '');
  const [password, setPassword] = useState(formData?.password ||'');
  const [direccion, setDireccion] = useState(formData?.direccion || '');
  const [nombres, setNombres] = useState(formData?.nombres || '');
  const [apellidos, setApellidos] = useState(formData?.apellidos || '');
  const [fechaNacimiento, setFechaNacimiento] = useState(formData?.fechaNacimiento || '');
  const [codigoPais, setCodigoPais] = useState(formData?.codigoPais || '');
  const [numeroTelefono, setNumeroTelefono] = useState(formData?.numeroTelefono || '');
  const [genero, setGenero] = useState(formData?.genero || '');
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [isDayModalVisible, setIsDayModalVisible] = useState(false);
  const [isMonthModalVisible, setIsMonthModalVisible] = useState(false);
  const [isYearModalVisible, setIsYearModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGender, setSelectedGender] = useState(formData?.genero || '');
  const [isGenderModalVisible, setIsGenderModalVisible] = useState(false);

  const startYear = 1904;
  const endYear = 2004;
  let fechaCompleta = `${selectedYear}-${selectedMonth}-${selectedDay}`;
  
  let numeroCompleto = `+${codigoPais} ${numeroTelefono}`;
  const handleNumeroTelefonoChange = (text) => {
    // Validación de números de teléfono
    if (/^\d*$/.test(text)) {
      setNumeroTelefono(text);
    }
  };

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    setIsGenderModalVisible(false);
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

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{}}
  >
      <View style={{ backgroundColor: '#CEE3F6', padding: 40, paddingBottom: 1000 }}>
      <Text style={{ fontSize:24 , marginBottom: 40,top:20,fontWeight: 'bold' }}>Ingrese sus datos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Dirección de envío"
          value={direccion}
          onChangeText={setDireccion}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombres"
          value={nombres}
          onChangeText={setNombres}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={apellidos}
          onChangeText={setApellidos}
        />
      

      <View style={styles.dateRow}>
          <TouchableOpacity onPress={() => setIsDayModalVisible(true)}>
            <Text style={styles.dateInput}>{selectedDay || 'Día'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsMonthModalVisible(true)}>
            <Text style={styles.dateInput}>{selectedMonth || 'Mes'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsYearModalVisible(true)}>
            <Text style={styles.dateInput}>{selectedYear || 'Año'}</Text>
          </TouchableOpacity>
        </View>

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

        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setIsCountryModalVisible(true)}>
          <Text style={{ borderWidth: 1, padding: 15 ,width: 60, marginVertical: 10,borderColor: '#2E9AFE' }}>{`+${codigoPais}`}</Text>
        </TouchableOpacity>
        <TextInput
        
          placeholder="Número de teléfono"
          keyboardType="numeric"
          value={numeroTelefono}
          onChangeText={handleNumeroTelefonoChange}
          style={{ borderWidth: 1, padding: 10, width: 150, marginVertical: 10,borderColor: '#2E9AFE',}}
        />
        </View>
        <CountryCodeModal isVisible={isCountryModalVisible} onSelectCode={code => { setCodigoPais(code); setIsCountryModalVisible(false); }} />

        <TouchableOpacity onPress={() => setIsGenderModalVisible(true)}>
          <Text style={{ borderWidth: 1, padding: 10, width: 200, marginVertical: 10,borderColor: '#2E9AFE' }}>{selectedGender || 'Género'}</Text>
        </TouchableOpacity>

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

        <TextInput
          style={styles.input}
          
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button

          title="Siguiente"
          onPress={() => onNext({ email,password,direccion,nombres,apellidos,fechaCompleta,numeroCompleto,genero,})}
        />
      </View>
    </KeyboardAvoidingView>
    )
  
};

// Segundo formulario ///////////
const SecondFormScreen = ({formData, onNext,onPrevious }) => {
  const [banco, setBanco] = useState(formData?.banco || '');
  const [noCuenta, setNoCuenta] = useState(formData?.noCuenta || '');
  const [titularCuenta, setTitularCuenta] = useState(formData?.titularCuenta || '');
  const [noReferencia, setNoReferencia] = useState(formData?.noReferencia || '');
  const [clabe, setClabe] = useState(formData?.clabe || '');

  return (
    <View style={{ backgroundColor: '#CEE3F6', padding: 40, paddingBottom: 1000 }}>
    <Text style={{ fontSize:24 , marginBottom: 40,top:20,fontWeight: 'bold' }}>Datos bancarios:</Text>
      <TextInput
        style={styles.input}
        placeholder="Banco"
        value={banco}
        onChangeText={text => setBanco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="No Cuenta Bancaria (11-16 dígitos)"
        value={noCuenta}
        onChangeText={text => setNoCuenta(text)}
        keyboardType="numeric"
        maxLength={16}
      />
      <TextInput
        style={styles.input}
        placeholder="Titular de la Cuenta"
        value={titularCuenta}
        onChangeText={text => setTitularCuenta(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="No Referencia Bancaria"
        value={noReferencia}
        onChangeText={text => setNoReferencia(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Clabe (18 dígitos)"
        value={clabe}
        onChangeText={text => setClabe(text)}
        keyboardType="numeric"
        maxLength={18}
      />
      <Button
        title="Siguiente"
        onPress={() => onNext({ banco,noCuenta,titularCuenta,noReferencia,clabe })}
      />
      <Button
        title="Regresar"
        onPress={onPrevious}
      />
    </View>
  );
};

// Última pantalla de registro /////////////
const ThirdFormScreen = ({ formData,onPrevious, onRegister }) => {
  
  const CountryCodeModalF = ({ isVisible, onSelectCodeF }) => {
    const countryCodesF = [
      { id: 1, code: '52', flag: '🇲🇽', country: 'México' },
      { id: 2, code: '1', flag: '🇺🇸', country: 'EE. UU.' },
    ];
  
    return (
      <Modal animationType="slide" transparent visible={isVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, maxHeight: 300 }}>
            <ScrollView>
              {countryCodesF.map(country => (
                <TouchableOpacity key={country.id} onPress={() => onSelectCodeF(country.code)}>
                  <Text style={{ fontSize: 20 }}>{country.flag} {country.country} (+{country.code})</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  const [nombreF, setNombreF] = useState(formData?.nombreF || '');
  const [calle, setCalle] = useState(formData?.calle || '');
  const [ciudad, setCiudad] = useState(formData?.ciudad || '');
  const [estado, setEstado] = useState(formData?.estado || '');
  const [codigoPostal, setCodigoPostal] = useState(formData?.codigoPostal || '');
  const [numeroTelefonoF, setNumeroTelefonoF] = useState(formData?.numeroTelefono || '');
  const [emailF, setEmailF] = useState(formData?.emailF || '');
  const [rfc, setRFC] = useState(formData?.rfc || '');
  const [isCountryModalFVisible, setIsCountryModalFVisible] = useState(false);
  const [codigoPaisF, setCodigoPaisF] = useState(formData?.codigoPaisF || '');
  let numeroCompletoF = `+${codigoPaisF} ${numeroTelefonoF}`;
  const handleNumeroTelefonoFChange = (text) => {
    // Validación de números de teléfono
    if (/^\d*$/.test(text)) {
      setNumeroTelefonoF(text);
    }
  };
  const handleRegister = () => {
    const completeFormData = { ...formData, nombreF,calle,ciudad,estado,codigoPostal,numeroCompletoF,emailF,rfc};
    console.log(completeFormData);
    
    //onRegister(completeFormData);
    // Envia los datos al servidor backend
    fetch('http://20.127.17.215:3000/registerBIF', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(completeFormData),
  })
    .then(response => response.json())
    .then(data => {
      // Procesar la respuesta del servidor
      console.log('Respuesta del servidor:', data);
      // Realizar las acciones necesarias después de guardar los datos

      //navigation.navigate('LoginU');
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
      // Manejar el error de envío de datos
    });

    fetch('http://20.127.17.215:3000/registerFarm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(completeFormData),
  })
    .then(response => response.json())
    .then(data => {
      // Procesar la respuesta del servidor
      console.log('Respuesta del servidor:', data);
      // Realizar las acciones necesarias después de guardar los datos

      //navigation.navigate('LoginU');
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
      // Manejar el error de envío de datos
    });

    fetch('http://20.127.17.215:3000/registerF', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(completeFormData),
  })
    .then(response => response.json())
    .then(data => {
      // Procesar la respuesta del servidor
      console.log('Respuesta del servidor:', data);
      // Realizar las acciones necesarias después de guardar los datos

      //navigation.navigate('InicioF');
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
      // Manejar el error de envío de datos
    });
  };

  return (
    <View style={{ backgroundColor: '#CEE3F6', padding: 40, paddingBottom: 1000 }}>
    <Text style={{ fontSize:24 , marginBottom: 40,top:20,fontWeight: 'bold' }}>Farmacia a registrar:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Farmacia"
        value={nombreF}
        onChangeText={setNombreF}
      />
      <TextInput
        style={styles.input}
        placeholder="Calle y número"
        value={calle}
        onChangeText={setCalle}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={ciudad}
        onChangeText={setCiudad}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      <TextInput
        style={styles.input}
        placeholder="Código Postal"
        value={codigoPostal}
        onChangeText={setCodigoPostal}
      />

      <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => setIsCountryModalFVisible(true)}>
        <Text style={{ borderWidth: 1, padding: 15 ,width: 60, marginVertical: 10,borderColor: '#2E9AFE' }}>{`+${codigoPaisF}`}</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Número de teléfono"
        keyboardType="numeric"
        value={numeroTelefonoF}
        onChangeText={handleNumeroTelefonoFChange}
        style={{ borderWidth: 1, padding: 10, width: 150, marginVertical: 10 ,borderColor: '#2E9AFE'}}
      />
      </View>
      <CountryCodeModalF isVisible={isCountryModalFVisible} onSelectCodeF={code => { setCodigoPaisF(code); setIsCountryModalFVisible(false); }} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={emailF}
        onChangeText={setEmailF}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="RFC"
        value={rfc}
        onChangeText={setRFC}
        maxLength={13}
      />

      <Button

        title="Registrar"
        onPress={handleRegister}
        
      />
      <Button
        title="Regresar"
        onPress={onPrevious}
      />
    </View>
  );
};
const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#2E9AFE',
    padding: 10,
    marginBottom: 10,
    height: 60,
    
  },
  dateRow: {
    flexDirection: 'row',
    marginBottom: 10,

    
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#2E9AFE',
    padding: 10,
    width: 102,
    height: 40,
    
    marginHorizontal: 5,
  },
  // Add more styles as needed
}
const RegisterScreenF = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [formData, setFormData] = useState({});

  const handleFirstFormNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentScreen(2);
  };

  const handleSecondFormNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentScreen(3);
  };

  const handlePreviousScreen = () => {
    setCurrentScreen((prevScreen) => prevScreen - 1);
  };

  const handleRegister = (completeFormData) => {
    // Aquí puedes enviar los datos al servidor o realizar cualquier acción necesaria
    console.log(completeFormData);
  };

  let content;
  if (currentScreen === 1) {
    content = (
      <FirstFormScreen formData={formData} onNext={handleFirstFormNext} />
    );
  } else if (currentScreen === 2) {
    content = (
      <SecondFormScreen
        formData={formData}
        onNext={handleSecondFormNext}
        onPrevious={handlePreviousScreen}
      />
    );
  } else {
    content = (
      <ThirdFormScreen
        formData={formData}
        onRegister={handleRegister}
        onPrevious={handlePreviousScreen}
      />
    );
  }

  return (
    <View>
      {content}
    </View>
  );

};

export default RegisterScreenF;




