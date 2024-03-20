import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Time from '../../../Container/Time/Time';
const Stack = createNativeStackNavigator();
const TimeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Time" component={Time} />
        </Stack.Navigator>
    )
}

export default TimeScreen