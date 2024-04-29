import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from '../../../Container/Login/Entry/Entry';
import OTP from '../../../Container/Login/OTP/OTP';
const Stack = createNativeStackNavigator();
const LoginScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false , animation: 'slide_from_left'}} >
            <Stack.Screen name="Entry" component={Entry} />
            <Stack.Screen name="OTP" component={OTP} />
        </Stack.Navigator>
    )
}

export default LoginScreen