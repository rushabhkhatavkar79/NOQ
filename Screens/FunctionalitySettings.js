import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Settings } from '../Components/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FunctionalitySettings = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#9457EB",
  };

  const [terminalSettings, setTerminalSettings] = useState([]);
  const [sidebarSettings, setSidebarSettings] = useState([]);
  const [paymentTypesCounter, setPaymentTypesCounter] = useState([]);

  useEffect(()=>{
async function getData(){
    const terminalSettingsData = await AsyncStorage.getItem("terminalSettings");
    const parsedTerminalSettingsData = JSON.parse(terminalSettingsData);
    setTerminalSettings(parsedTerminalSettingsData);

    const sidebarSettingsData = await AsyncStorage.getItem("sidebarSettings");
    const parsedSidebarSettingsData = JSON.parse(sidebarSettingsData);
    setSidebarSettings(parsedSidebarSettingsData);

    const paymentTypesCounterData = await AsyncStorage.getItem("paymentTypesCounter");
    const parsedPaymentTypesCounterData = JSON.parse(paymentTypesCounterData);
    setPaymentTypesCounter(parsedPaymentTypesCounterData);

}
    getData();
  },[])

  const handleRadio = async(radio,id, settingsType) => { 
      if(settingsType === "Terminal Settings"){
          const newData = terminalSettings.map((item)=>{
              if(item.id === id){
                  return{
                      ...item,
                      radio: radio
                  }
              }else{
                  return{
                    ...item
                  }
              }
          })
          setTerminalSettings(newData);
          await AsyncStorage.removeItem("terminalSettings");
          await AsyncStorage.setItem("terminalSettings", JSON.stringify(newData));
      }

      if(settingsType === "Sidebar Settings"){
        const newData = sidebarSettings.map((item)=>{
            if(item.id === id){
                return{
                    ...item,
                    radio: radio
                }
            }else{
                return{
                  ...item
                }
            }
        })
        setSidebarSettings(newData);
        await AsyncStorage.removeItem("sidebarSettings");
        await AsyncStorage.setItem("sidebarSettings", JSON.stringify(newData));
    }

    if(settingsType === "Payment Types Counter"){
        const newData = paymentTypesCounter.map((item)=>{
            if(item.id === id){
                return{
                    ...item,
                    radio: radio
                }
            }else{
                return{
                  ...item
                }
            }
        })
        setPaymentTypesCounter(newData);
        await AsyncStorage.removeItem("paymentTypesCounter");
        await AsyncStorage.setItem("paymentTypesCounter", JSON.stringify(newData));
    }
   }

    return (
        <View style={styles.container}>
            <SafeAreaView style={backgroundStyle} />
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop:"5%"}}>
                <Text style={[styles.textTitle,{marginBottom:20}]}>Terminal Settings</Text>
                {terminalSettings.length > 0 ? terminalSettings.map((item)=>
                <View key={item.id}>
                    <Settings
                        id={item.id}
                        settingsType={"Terminal Settings"}
                        radio={item.radio} 
                        name={item.name} 
                        up={item.up.length > 0 ? true : false}
                        down={item.down.length > 0 ? true : false}
                        handleRadio={handleRadio}
                    />
                    </View>
                ):<></>}
            </View>
            <View style={{marginTop:"5%"}}>
                <Text style={[styles.textTitle,{marginBottom:20}]}>Sidebar Settings</Text>
                {sidebarSettings.length > 0 ? sidebarSettings.map((item)=>
                <View key={item.id}>
                <Settings 
                    id={item.id}
                    settingsType={"Sidebar Settings"}
                    radio={item.radio} 
                    name={item.name} 
                    up={item.up.length > 0 ? true : false}
                    down={item.down.length > 0 ? true : false}
                    handleRadio={handleRadio}
                />
                </View>
                ) : <></>}
            </View>
            <View style={{marginTop:"5%"}}>
                <Text style={[styles.textTitle,{marginBottom:20}]}>Payment Types Counter</Text>
                {paymentTypesCounter.length > 0 ? paymentTypesCounter.map((item)=>
                <View key={item.id}>
                <Settings 
                    id={item.id}
                    settingsType={"Payment Types Counter"}
                    radio={item.radio} 
                    name={item.name} 
                    up={item.up.length > 0 ? true : false}
                    down={item.down.length > 0 ? true : false}
                    handleRadio={handleRadio}
                />
                </View>
                ) : <></>}
            </View>
            </ScrollView>
        </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      height:Dimensions.get("window").height,
      paddingLeft:"5%",
      paddingRight:"5%"
    },
    textTitle:{
        color:"#000000", 
        fontSize:20, 
        fontWeight:"700",
    },
    wrapperView:{
        flexDirection:"row",
        justifyContent:"space-between", 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:"8%"
    },
    innerWrapperView:{
        flexDirection:"row",
        marginBottom:10
    },
    upText:{
        color:"#355E3B", 
        fontSize:15,
        fontWeight:"600"
    },
    downText:{
        color:"#800080", 
        fontSize:15,
        fontWeight:"600",
        marginLeft:30
    },
    radioTitle:{
        color:"#000000", 
        fontSize:15,
        fontWeight:"500",
        marginLeft:10
    },
    radioOuterView:{
        width:20,
        height:20,
        borderWidth:1,
        borderColor:"#800080",
        justifyContent:"center",
        alignItems:"center"
    },
    radioInnerView:{
        width:13,
        height:13,
        backgroundColor:"#800080"
    }
  });
