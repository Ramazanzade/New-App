import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Planned from '../../../../Container/Time/Planned/Planned';
const Stack = createNativeStackNavigator();
const PlannedScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false ,animation: 'slide_from_right' }} >
            <Stack.Screen name="Planned" component={Planned} />
        </Stack.Navigator>
    )
}

export default PlannedScreen