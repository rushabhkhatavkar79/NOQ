/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
import WrapperApp from './WrapperApp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather'
import { paymentTypesCounter, sidebarSettings, terminalSettings } from './data';
 
 const App= ()=> {
  Icon.loadFont();
 useEffect(()=>{
  async function saveValue() {
    await AsyncStorage.setItem("userName", JSON.stringify("demo"));
    await AsyncStorage.setItem("password", JSON.stringify("demo"));
    
    const getTermianlSetting = await AsyncStorage.getItem("terminalSettings");
    if(getTermianlSetting === null){
      await AsyncStorage.setItem("terminalSettings", JSON.stringify(terminalSettings));
    }

    const getSidebarSettings = await AsyncStorage.getItem("sidebarSettings");
    if(getSidebarSettings === null){
      await AsyncStorage.setItem("sidebarSettings", JSON.stringify(sidebarSettings));
    }

    const getPaymentTypesCounter = await AsyncStorage.getItem("paymentTypesCounter");
    if(getPaymentTypesCounter === null){
      await AsyncStorage.setItem("paymentTypesCounter", JSON.stringify(paymentTypesCounter));
    }
  }
  saveValue();
 },[])

   return (
     <WrapperApp />
   );
 };

 export default App;