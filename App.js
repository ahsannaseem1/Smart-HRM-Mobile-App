import Intro from './Screens/Intro'
import Login from './Screens/Login';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

 
  
  return (
    <NavigationContainer>
    <Stack.Navigator >

    <Stack.Screen 
      name="Intro" 
      component={Intro}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen 
      name="Login" 
      component={Login}
      options={{
        headerShown:false
      }}
    />
    

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
