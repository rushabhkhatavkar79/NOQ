import React,{useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../Screens/Login';
import { Pin } from '../Screens/Pin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DeviceSettings } from '../Screens/DeviceSettings';
import { FunctionalitySettings } from '../Screens/FunctionalitySettings';

const Stack = createNativeStackNavigator();

const Stacks = () => {
const [checkLogIn, setCheckLogIn] = useState(false);
const [loading, setLoading] = useState(false);

useEffect(()=>{
async function getData(){
    const value = await AsyncStorage.getItem("loggedIn");
    setCheckLogIn(JSON.parse(value));
    setLoading(true)
}
getData();
},[checkLogIn])

if (loading === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Loading...</Text>
      </View>
    );
  }else if(!checkLogIn || checkLogIn === null){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title:"Hello",headerShown:false}}
        />
        <Stack.Screen 
        name="Pin" 
        component={Pin} 
        options={{ 
            title: 'NOQ',
            headerShown:true,
            headerBackTitleVisible:false,
            headerShadowVisible:false,
            headerTitleStyle:{
                color:"#ffffff"
            },
            headerBackVisible:false,
            headerTintColor:"#ffffff",
            headerStyle:{backgroundColor:"#9457EB"}}}/>
            <Stack.Screen 
                name="Device Settings" 
                component={DeviceSettings} 
                options={{ 
                    title: 'Device Settings',
                    headerTitleAlign:"left",
                    headerShown:true,
                    headerBackTitleVisible:false,
                    headerShadowVisible:false,
                    headerTitleStyle:{
                        color:"#ffffff"
                    },
                    headerTintColor:"#ffffff",
                    headerStyle:{backgroundColor:"#9457EB"}}}/>
                    <Stack.Screen 
                        name="Functionalities Settings" 
                        component={FunctionalitySettings} 
                        options={{ 
                            title: 'Functionalities Settings',
                            headerTitleAlign:"left",
                            headerShown:true,
                            headerBackTitleVisible:false,
                            headerShadowVisible:false,
                            headerTitleStyle:{
                                color:"#ffffff"
                            },
                            headerTintColor:"#ffffff",
                            headerStyle:{backgroundColor:"#9457EB"}}} />
      </Stack.Navigator>
      </NavigationContainer>
  );
        }else{
        return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Pin">
        <Stack.Screen 
        name="Pin" 
        component={Pin} 
        options={{ 
            title: 'NOQ',
            headerShown:true,
            headerBackTitleVisible:false,
            headerShadowVisible:false,
            headerTitleStyle:{
                color:"#ffffff"
            },
            headerTintColor:"#ffffff",
            headerStyle:{backgroundColor:"#9457EB"}}}/>
            <Stack.Screen 
                name="Device Settings" 
                component={DeviceSettings} 
                options={{ 
                    title: 'Device Settings',
                    headerTitleAlign:"left",
                    headerShown:true,
                    headerBackTitleVisible:false,
                    headerShadowVisible:false,
                    headerTitleStyle:{
                        color:"#ffffff"
                    },
                    headerTintColor:"#ffffff",
                    headerStyle:{backgroundColor:"#9457EB"}}}/>
                    <Stack.Screen 
                        name="Functionalities Settings" 
                        component={FunctionalitySettings} 
                        options={{ 
                            title: 'Functionalities Settings',
                            headerTitleAlign:"left",
                            headerShown:true,
                            headerBackTitleVisible:false,
                            headerShadowVisible:false,
                            headerTitleStyle:{
                                color:"#ffffff"
                            },
                            headerTintColor:"#ffffff",
                            headerStyle:{backgroundColor:"#9457EB"}}} />
      </Stack.Navigator>
      </NavigationContainer>
)
        }
};

export default Stacks;