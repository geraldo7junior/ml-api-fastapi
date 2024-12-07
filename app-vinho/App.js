import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const App = () => {
  const [formData, setFormData] = useState({
    alcohol: '',
    malic_acid: '',
    ash: '',
    alcalinity_of_ash: '',
    magnesium: '',
    total_phenols: '',
    flavanoids: '',
    nonflavanoid_phenols: '',
    proanthocyanins: '',
    color_intensity: '',
    hue: '',
    od280_od315_of_diluted_wines: '',
    proline: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://ml-api-fastapi-3jzs.onrender.com/predict/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          alcohol: parseFloat(formData.alcohol),
          malic_acid: parseFloat(formData.malic_acid),
          ash: parseFloat(formData.ash),
          alcalinity_of_ash: parseFloat(formData.alcalinity_of_ash),
          magnesium: parseFloat(formData.magnesium),
          total_phenols: parseFloat(formData.total_phenols),
          flavanoids: parseFloat(formData.flavanoids),
          nonflavanoid_phenols: parseFloat(formData.nonflavanoid_phenols),
          proanthocyanins: parseFloat(formData.proanthocyanins),
          color_intensity: parseFloat(formData.color_intensity),
          hue: parseFloat(formData.hue),
          od280_od315_of_diluted_wines: parseFloat(formData.od280_od315_of_diluted_wines),
          proline: parseFloat(formData.proline),
        }),
      });
      const result = await response.json();
      Alert.alert('Previsão do Modelo', `Classe prevista: ${result.prediction}`);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter a previsão. Verifique sua conexão ou os dados informados.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Formulário de Previsão de Tipo de Vinho</Text>
        {Object.keys(formData).map((field) => (
          <TextInput
            key={field}
            style={styles.input}
            placeholder={`Digite o valor para ${field.replace(/_/g, ' ')}`}
            keyboardType="numeric"
            value={formData[field]}
            onChangeText={(value) => handleInputChange(field, value)}
          />
        ))}
        <Button title="Enviar" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default App;
