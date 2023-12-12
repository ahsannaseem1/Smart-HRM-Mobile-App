import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 



export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

   
       
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >

            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 0.35 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../images/login01.png')}
                        />
                        </View>


                </View>




                <View style={{ flex: 0.65, alignItems: 'center', justifyContent: 'center',backgroundColor:'#092636',borderStartStartRadius:50,borderStartEndRadius:50,}}>
                    <View style={{ flex: 0.3,alignItems:'left',justifyContent:'center',marginTop:20}}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={{marginTop:10,color:'white'}}>Login with your email and password</Text>
                    
                    </View>



                    <View style= {{flex:0.45,marginTop:50,}}>

                        <TextInput
                            style={{ width: 250, height: 35, borderRadius: 5, paddingLeft: 10, borderBottomWidth: 1,borderColor:'white'}}
                            placeholder='Email'
                            placeholderTextColor='#e3e3e3'
                           
                        />
                        <View>
                            <TextInput
                                style={{
                                    width: 250,
                                    height: 35,
                                    marginTop: 20,
                                    borderRadius: 5,
                                    paddingLeft: 10,
                                    borderBottomWidth: 1,
                                    borderColor:'white'
                                }}
                                placeholder="Password"
                                placeholderTextColor="#e3e3e3"
                                secureTextEntry={!passwordVisible}
                                
                            />
                            <TouchableOpacity
                                onPress={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: 10,
                                    top: 29,
                                }}
                            >
                                {passwordVisible ? (
                                   
                                    <AntDesign name="eyeo" size={18} color="white" />
                                ) : (
                                    <Entypo name="eye-with-line" size={18} color="white" />
                                )}
                            </TouchableOpacity>
                            

                        </View>

                        <TouchableOpacity>
                            <Text style={{ marginTop: 10, fontSize: 11, textDecorationLine: 'underline', textAlign: 'right',color:'white' }}>Forgot Password?</Text>
                        </TouchableOpacity>
                       
                       
                    </View>

                    <View style={{ flex: 0.25,  flexDirection: 'row',backgroundColor:'#092636' }}>
                    <TouchableOpacity >
                        <View style={{ backgroundColor: 'white', borderRadius: 15, width: 250, height: 35, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
                        <Entypo name="login" size={18} color="black" />  
                        <Text style={{ color: 'black', textAlign: 'center',fontWeight:'bold',marginLeft:5,fontSize:18 }}>Login</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                    



                </View>



               

               

            </View>
        </KeyboardAvoidingView>
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
        fontSize: 35, fontWeight: 'bold',
        color:'white',
    },

});
