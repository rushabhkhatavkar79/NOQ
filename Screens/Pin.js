import React,{useRef} from 'react';
import ReactNativePinView from "react-native-pin-view";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export const Pin = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#9457EB",
  };
    const pinView = useRef(null)

    const handleDeviceSettings = () => { 
        navigation.navigate("Device Settings");
     }

    return (
        <View style={styles.container}>
            <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{marginTop:"20%"}}>
            <ReactNativePinView
            inputSize={32}
            ref={pinView}
            pinLength={4}
            buttonSize={60}
            inputViewEmptyStyle={{
              backgroundColor: "#ffffff",
              borderWidth: 1,
              borderColor: "#ffffff",
            }}
            inputViewFilledStyle={{
              backgroundColor: "#ffffff",
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: "#ffffff",
              backgroundColor: "#ffffff",
              borderRadius:0,
            }}
            buttonTextStyle={{
              color: "#000000",
            }}
            onButtonPress={key => {
              if (key === "custom_left") {
                pinView.current.clear()
              }
              if (key === "custom_right") {
                alert("Entered Pin: " + enteredPin)
              }
            }}
          />
          </View>
          <View>
              <Text style={styles.actionTex}>Actions</Text>
          </View>
          <View style={styles.deviceSettingView}>
              <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>Clock In/Out</Text>
              </View>
              <TouchableOpacity style={styles.buttonView} onPress={handleDeviceSettings}>
                  <Text style={styles.buttonText}>Device Settings</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.openRegisterView}>
          <View style={[styles.buttonView,{backgroundColor:"#355E3B"}]}>
                  <Text style={[styles.buttonText,{color:"#ffffff"}]}>Open Register</Text>
              </View>
              </View>
          <View>
              <Text style={styles.actionTex}>Notifications</Text>
          </View>
          <View style={styles.deviceSettingView}>
              <View style={[styles.buttonView,{backgroundColor:"#FD5DAD"}]}>
                  <Text style={[styles.buttonText,{color:"#ffffff"}]}>5 New Pre-orders</Text>
              </View>
              <View style={[styles.buttonView,{backgroundColor:"#FD5DAD"}]}>
                  <Text style={[styles.buttonText,{color:"#ffffff"}]}>2 Open Tabs</Text>
              </View>
          </View>
          </SafeAreaView>
        </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#9457EB",
      height:Dimensions.get("window").height,
      paddingLeft:"10%",
      paddingRight:"10%"
    },
    actionTex:{
        color:"#ffffff", 
        fontSize:20, 
        fontWeight:"500",
        marginTop:10
    },
    deviceSettingView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:"5%"
    },
    buttonView:{
        backgroundColor:"#ffffff",
        width:140,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25
    },
    buttonText:{
        fontSize:15,
        fontWeight:"500",
        color:"#9457EB"
    },
    openRegisterView:{
        justifyContent:"center",
        alignItems:"center", 
        marginTop:"10%"
    },
  });