import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome_user from '../../../Container/Welcomepage/Welcome_user/Welcome_user';
import Welcome_Next from '../../../Container/Welcomepage/Welcome_Next/Welcome_Next';
const Stack = createNativeStackNavigator();
const WelcomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Welcome_user" component={Welcome_user} />
            <Stack.Screen name="Welcome_Next" component={Welcome_Next} />
        </Stack.Navigator>
    )
}

export default WelcomeScreen