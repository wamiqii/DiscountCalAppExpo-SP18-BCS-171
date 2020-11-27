import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");
  const [disprice, setdisprice] = useState(0);
  const [Yousave, setYousave] = useState("");

  const calculate = () => {
    if(price >= 0){
      if (discount >= 0 && discount < 100){
        var discountedprice = price - (price  * (discount / 100));
        setdisprice(discountedprice);
        var save = price - discountedprice;
        setYousave(save);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, fontWeight: "bold", backgroundColor: "silver", width: 400, textAlign: "center" ,justifyContent: "center", borderRadius: 10}}>Discount Calculator!</Text>
      <Text style={{fontSize: 20}}>Wamiq Waheed - SP18-BCS-171</Text>
      <Text style={{fontSize:20, fontWeight: "bold", marginTop: 20}}>Enter Original Price</Text>
      <TextInput keyboardType={"number-pad"} style={{borderWidth: 1, width: 200, borderRadius: 5, fontSize: 20}} value={price} onChangeText={(EnteredPrice) => setprice(EnteredPrice)}/>
      <Text style={{fontSize:20, fontWeight: "bold", marginTop: 20}}>Enter Discount (%)</Text>
      <TextInput keyboardType={"number-pad"} style={{borderWidth: 1, width: 200, borderRadius: 5, fontSize: 20}} value={discount} onChangeText={(EnteredPrice) => setdiscount(EnteredPrice)}/>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View style={{width: "70%", paddingTop: 10}}>
          <Button title="Calculate" color="black" onPress={() => calculate()}/>
        </View>
      </View>
      <View>
        <Text style={{fontSize:20, fontWeight: "bold", color: "green", marginTop: 20}}>Original Price: {price}</Text>
        <Text style={{fontSize:20, fontWeight: "bold", color: "green"}}>Discounted Price: {disprice}</Text>
        <Text style={{fontSize:20, fontWeight: "bold", color: "green"}}>You Saved: {Yousave}</Text>
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
