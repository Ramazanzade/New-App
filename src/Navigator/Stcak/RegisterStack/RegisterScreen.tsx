import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personalinformation from '../../../Container/Register/Personalinformation/Personalinformation';
import Driverinformation from '../../../Container/Register/Driverinformation/Driverinformation';
import Driverslicense from '../../../Container/Register/Driverslicense/Driverslicense';
const Stack = createNativeStackNavigator();
const RegisterScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {/* <Stack.Screen name="Personalinformation" component={Personalinformation} />
            <Stack.Screen name="Driverinformation" component={Driverinformation} /> */}
            <Stack.Screen name="Driverslicense" component={Driverslicense} />
        </Stack.Navigator>
    )
}

export default RegisterScreen