import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    fetch('http://localhost:5000/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ age, address })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setAge(text)}
        value={age}
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setAddress(text)}
        value={address}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20
  }
});
