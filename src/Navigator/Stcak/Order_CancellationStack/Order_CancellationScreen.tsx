import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order_Cancellation from '../../../Container/Order_Cancellation/Order_Cancellation';
const Stack = createNativeStackNavigator();
const Order_CancellationScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false ,animation: 'slide_from_right'}} >
            <Stack.Screen name="Order_Cancellation" component={Order_Cancellation} />
        </Stack.Navigator>
  )
}

export default Order_CancellationScreen