import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Completed from '../../../../Container/Time/Completed/Completed';
import Detail_index from '../../../../Component/TimeComponent/CompletedComponent/Detail/Detail_index';
const Stack = createNativeStackNavigator();
const CompletedScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false ,animation: 'slide_from_right' }} >
            <Stack.Screen name="Completed" component={Completed} />
            <Stack.Screen name="Detail_index" component={Detail_index} />
        </Stack.Navigator>
  )
}

export default CompletedScreen