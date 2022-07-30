import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const DeviceSettings = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#9457EB",
  };

  const handleFunctionalitySettings = () => { 
    navigation.navigate("Functionalities Settings");
 }

    return (
        <View style={styles.container}>
            <SafeAreaView style={backgroundStyle} />
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.wrapperView}>
            <Feather name='printer' style={styles.icon} size={30}/>
                <Text style={styles.textInputTitle}>
                    PRINTERS & CASH DRAWER
                </Text>
            </View>
            <View style={styles.wrapperView}>
            <FontAwesome name='credit-card-alt' style={styles.icon} size={25}/>
                <Text style={styles.textInputTitle}>
                    CARD READER
                </Text>
            </View>
            <View style={styles.wrapperView}>
            <MaterialIcons name='settings-system-daydream' style={styles.icon} size={30}/>
                <Text style={styles.textInputTitle} onPress={handleFunctionalitySettings}>
                    FUNCTIONALITIES SETTINGS
                </Text>
            </View>
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
    textInputTitle:{
        color:"#000000", 
        fontSize:18, 
        fontWeight:"500",
    },
    wrapperView:{
        flexDirection:"row",
        marginTop:"10%"
    },
    icon:{
        marginRight:20,
        color:"#9457EB"
    }
  });