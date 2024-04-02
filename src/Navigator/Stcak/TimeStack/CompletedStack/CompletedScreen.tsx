import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Completed from '../../../../Container/Time/Completed/Completed';
const Stack = createNativeStackNavigator();
const CompletedScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Completed" component={Completed} />
        </Stack.Navigator>
  )
}

export default CompletedScreen