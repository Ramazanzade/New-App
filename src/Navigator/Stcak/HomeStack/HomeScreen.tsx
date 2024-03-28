import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../Container/Home/Home';
import Order_Cancellation_index from '../../../Component/HomeComponent/Order_Cancellation/Order_Cancellation_index';
const Stack = createNativeStackNavigator();
const HomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Order_Cancellation_index" component={Order_Cancellation_index} />
        </Stack.Navigator>
    )
}

export default HomeScreen