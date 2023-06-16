import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { decode } from 'base64-arraybuffer';
import { extname } from 'path';

import UserContext from '../UserContext';

const InvetarioScreenF = ({ navigation }) => {
  const { userData } = useContext(UserContext); // Obtener los datos del usuario del contexto
  console.log("Contexto datos usuario: ", userData);
  const [farmaciaData, setFarmaciaData] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [imagenUri, setImagenUri] = useState('');
  const [productos, setProductos] = useState([]);

  // Función para obtener la extensión del archivo
  function getExtension(filename) {
    return extname(filename).slice(1);
  }

  const seleccionarImagen = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso de acceso a la galería denegado');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        const { uri } = result;
        setProductoData({ ...productoData, imagenUrl: uri }); // Cambiar imagen a imagenUrl
      }
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  };

  const [productoData, setProductoData] = useState({
    nombre: '',
    imagenUrl: null,
    precio: '',
    proveedor: '',
  });

  const obtenerDatosFarmacia = async () => {
    try {
      const response = await fetch(`http://20.127.17.215:3000/getFarmacia?propietarioId=${userData.id}`);
      const data = await response.json();
      setFarmaciaData(data[0]);
      obtenerProductos(data[0].id); // Obtener los productos de la farmacia
    } catch (error) {
      console.error('Error al obtener los datos de la farmacia:', error);
    }
  };

  const obtenerProductos = async (idFarmacia) => {
    try {
      const response = await fetch(`http://20.127.17.215:3000/getProductos?idFarmacia=${idFarmacia}`);
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    obtenerDatosFarmacia();
  }, [userData.id]);

  const handleInputChange = (field, value) => {
    setProductoData({ ...productoData, [field]: value });
  };

  const handleRegistrarProducto = async () => {
    try {
      const response = await fetch('http://20.127.17.215:3000/registrarProducto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_farmacia: farmaciaData.id,
          imagen: productoData.imagenUrl, // Cambiar de imagen a imagenUrl
          nombre: productoData.nombre,
          precio: productoData.precio,
          proveedor: productoData.proveedor,
        }),
      });
      const data = await response.json();
      // Realizar alguna acción después de registrar el producto, como mostrar un mensaje de éxito
      console.log('Producto registrado:', data);
      setMostrarFormulario(false);
      obtenerProductos(farmaciaData.id);
    } catch (error) {
      console.error('Error al registrar el producto:', error);
    }
  };

  const toggleMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };
  let botonTexto = mostrarFormulario ? 'Volver' : 'Registrar producto';

  if (!farmaciaData) {
    return <Text>Cargando datos de la farmacia...</Text>;
  }
  if (mostrarFormulario) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/LogoF.png')} style={styles.logoImage} />
        <Text style={styles.title}>Inventario</Text>

        <TouchableOpacity style={styles.button} onPress={toggleMostrarFormulario}>
          <Text style={styles.buttonText}>{botonTexto}</Text>
        </TouchableOpacity>

        {mostrarFormulario && (
          <View>
            <Text style={styles.subtitle}>Registrar Producto:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={productoData.nombre}
              onChangeText={(text) => handleInputChange('nombre', text)}
            />
            <TouchableOpacity style={styles.input} onPress={seleccionarImagen}>
              {imagenUri ? (
                <Image source={{ uri: imagenUri }} style={styles.imagenPreview} />
              ) : (
                <Text style={styles.inputPlaceholder}>Seleccionar imagen</Text>
              )}
            </TouchableOpacity>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Precio"
                value={productoData.precio}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange('precio', text)}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Proveedor"
                value={productoData.proveedor}
                onChangeText={(text) => handleInputChange('proveedor', text)}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRegistrarProducto}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoF.png')} style={styles.logoImage} />
      <Text style={styles.title}>Inventario</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productoContainer}>
            {item.imagen && (
              <Image source={{ uri: item.imagen }} style={styles.productoImagen} />
            )}
            <Text style={styles.productoNombre}>{item.nombre}</Text>
            <Text style={styles.productoPrecio}>Precio: ${item.precio}</Text>
            <Text style={styles.productoProveedor}>Proveedor: {item.proveedor}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => setMostrarFormulario(true)}>
        <Text style={styles.buttonText}>Registrar Producto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000080', // Fondo azul marino
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    top:15
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    top:35
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPlaceholder: {
    color: '#888',
  },
  imagenPreview: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  productoContainer: {
    marginBottom: 20,
  },
  productoImagen: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productoNombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  productoPrecio: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  productoProveedor: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  topImage: {
    width: '100%',
    height: 80,
    resizeMode: 'center',
    position: 'absolute',
    top: 5,
    zIndex: 1,

  },
});

export default InvetarioScreenF;
