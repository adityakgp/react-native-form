import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AgeAddressScreen = () => {
  const [age, setAge] = useState();
  const [address, setAddress] = useState('');

  const handleSave = async()=>{
    const url = 'https://react-native-age-address-default-rtdb.firebaseio.com/data.json';
    let result = await fetch(url,{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({age, address})});
    result = await result.json();
    if(result){
      console.log("details added");
      console.log("Age: "+age);
      console.log("Address: "+address);
    }
  }

  return ( 
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={text => setAge(text)}
        style={{ marginTop: 100 }}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
        style={{ marginBottom: 10 }}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default AgeAddressScreen;
