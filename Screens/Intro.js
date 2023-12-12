import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 

export default function Intro() {

    const navigation = useNavigation();

    const loginHandle = () => {

        navigation.navigate('Login')
    }
    const signUpHandle = () => {

        navigation.navigate('SignUpOption')
    }



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ flex: 0.80, backgroundColor: '#092636', borderBottomRightRadius: 60, borderBottomLeftRadius: 60, }}>



                <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
                     <Image
                        style={{ width: '100%', height: '100%', resizeMode: 'center',}}
                        source={require('../images/logo.png')}
                    />
                </View>




                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                    <Text style={styles.title}>The easy way to streamline your HR</Text>
                    <Text style={{ width: '80%', textAlign:'justify', fontSize: 15, color: 'white',lineHeight:22 }}>Smart HRM is a web based HR platform that helps Pakistani startup businesses streamline their HR processes.</Text>



                </View>

            </View>



            <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={loginHandle}>
                    <View style={{ backgroundColor: '#092636', borderRadius: 20, width: 250, height: 40, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
                    <Entypo name="login" size={18} color="white" />
                        <Text style={{ color: 'white', textAlign: 'center',fontWeight:'bold',fontSize:18,marginLeft:5 }}>Login</Text>
                    </View>
                </TouchableOpacity>
               
            </View>






        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        // fontFamily: 'Montserrat',
        fontSize: 30, marginBottom: 25, fontWeight: 'bold',
        width: '80%', textAlign: 'left', color: 'white',
    },

});
