import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../../../Container/Notification/Notification';
const Stack = createNativeStackNavigator();
const NotificationScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

export default NotificationScreen