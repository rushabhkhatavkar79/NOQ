import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export const Settings = ({ id, radio, name, up, down,handleRadio, settingsType}) => {
  
    return (
            <View style={styles.wrapperView} key={id}>
                <View style={styles.innerWrapperView}>
                    <TouchableOpacity style={styles.radioOuterView} onPress={()=>handleRadio(!radio, id, settingsType)}>
                        {radio ? 
                            <View style={styles.radioInnerView} /> :
                            <></>
                            }
                    </TouchableOpacity>
                    <Text style={styles.radioTitle}>{name}</Text>
                </View>
                <View style={styles.innerWrapperView}>
                    {up ? <Text style={styles.upText}>Up</Text> : <></>}
                    {down ? <Text style={styles.downText}>Down</Text> : <Text style={[styles.downText, {color:"#ffffff"}]}>Down</Text>}
                </View>
            </View>
  )
}

const styles = StyleSheet.create({
    wrapperView:{
        flexDirection:"row",
        justifyContent:"space-between", 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:"8%"
    },
    innerWrapperView:{
        flexDirection:"row",
        marginBottom:10,
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