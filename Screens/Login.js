import React,{useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Login = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#9457EB",
  };
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserName = (value) => { 
        setUserName(value);
     }

     const handlePassword = (value) => { 
        setPassword(value);
     }

     const handleSubmit=async()=> {
            const user = await AsyncStorage.getItem("userName");
            const pwd = await AsyncStorage.getItem("password");
            if(JSON.parse(user) === userName && JSON.parse(pwd) === password){
                navigation.navigate("Pin");
                await AsyncStorage.setItem("loggedIn", JSON.stringify("true"));
            }else{
                alert("User name or password is wrong")
            }
    }

    return (
        <View style={styles.container}>
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
            <View style={{marginTop:"10%"}}>
            <Text style={styles.title}>NOQ</Text>
            </View>
            <View style={{marginTop:"20%"}}>
            <Text style={styles.vendorTex}>VENDOR LOG IN</Text>
            </View>
            <View style={{marginTop:"20%"}}>
                <Text style={styles.textInputTitle}>
                    Insert User Name (User or email)
                </Text>
            </View>
            <View>
            <TextInput 
                style={styles.textInputStyle}
                fontSize={16}
                value={userName}
                autoCapitalize="none"
                onChangeText={(value) => handleUserName(value)}
            />
            </View>
            <View style={{marginTop:"7%"}}>
                <Text style={styles.textInputTitle}>
                    Insert Password
                </Text>
            </View>
            <View>
            <TextInput style={styles.textInputStyle}
          fontSize={16}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={(value) => handlePassword(value)}
        />
        <Text style={styles.fogotPassword}>
                    Forgot Password?
                </Text>
            </View>
            <View style={{marginTop:"10%"}}>
                <TouchableOpacity onPress={handleSubmit} style={{backgroundColor:"#ffffff",height:40,width:100,borderRadius:25,justifyContent:"center",alignItems:"center"}}>
                <Text style={[styles.textInputTitle,{color:"#9457EB"}]}>
                   Submit
                </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#9457EB",
      alignItems:"center",
      height:Dimensions.get("window").height
    },
    title:{
        color:"#ffffff", 
        fontSize:100, 
        fontWeight:"700"
    },
    textInputStyle: {
      paddingLeft: 5,
      marginTop: 5,
      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: "#ffffff",
      height: 44,
      backgroundColor: "#FFFFFF",
      width:250
    },
    vendorTex:{
        color:"#9400D3", 
        fontSize:30, 
        fontWeight:"500"
    },
    textInputTitle:{
        color:"#ffffff", 
        fontSize:15, 
        fontWeight:"500"
    },
    fogotPassword:{
        color:"#9400D3", 
        fontSize:15, 
        fontWeight:"500", 
        textAlign:"right",
        marginTop:"3%"
    }
  });