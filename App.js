import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");

  // const calculate = () = {

  // };


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, fontWeight: "bold"}}>Discount Calculator!</Text>
      <Text style={{fontSize: 25, fontWeight: "bold"}}>Wamiq Waheed - SP18-BCS-171</Text>
      <Text style={{fontSize:20, fontWeight: "bold", marginTop: 20}}>Original Price</Text>
      <TextInput keyboardType={"number-pad"} style={{borderWidth: 1, width: 200}} value={price} onChangeText={(EnteredPrice) => setprice(EnteredPrice)}/>
      <Text style={{fontSize:20, fontWeight: "bold", marginTop: 20}}>Enter Discount (%)</Text>
      <TextInput keyboardType={"number-pad"} style={{borderWidth: 1, width: 200}} value={discount} onChangeText={(EnteredPrice) => setdiscount(EnteredPrice)}/>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View style={{width: "70%", paddingTop: 10}}>
          <Button title="Calculate"/>
        </View>
      </View>

      <StatusBar style="auto" />
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
});
