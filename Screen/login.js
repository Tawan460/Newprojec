import { View, Image, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function login() {
  return (
    <View style={{
      flex:1
    }}>
      <LinearGradient
    colors={["#DEC4FC","#D8C4FC","#91C6FC"]}
    style={{
      width:"100%",
      height:"100%"
    }}
    >
      <View style={{
        justifyContent:'center',
        alignItems:'center',
        marginTop:150,
      }}>
      <Image source={require("../assets/image/Logormutp.png")} />
      </View>
      <View style={{
        width:'100%',
        height:"20%",
        // backgroundColor:'red'
      }}>
        <TextInput 
        style={{
          width:"80%",
          height:"50%",
          backgroundColor:'white',
          color:'white',
          alignItems: 'center'
        }}
        placeholderTextColor="black"
        placeholder="Password"
        secureTextEntry={true}
        >
        </TextInput>
      </View>

    </LinearGradient>
        
      
    </View>
  )
}