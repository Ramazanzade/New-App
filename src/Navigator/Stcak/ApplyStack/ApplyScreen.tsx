import { View, Text } from 'react-native'
import React from 'react'
import Apply from '../../../Container/Apply/Apply'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const ApplyScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false ,animation: 'slide_from_right'}} >
            <Stack.Screen name="Apply" component={Apply} />
        </Stack.Navigator>
    )
}

export default ApplyScreen