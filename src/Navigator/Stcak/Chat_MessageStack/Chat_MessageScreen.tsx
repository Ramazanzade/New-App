import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Message from '../../../Container/Chat/Message/Message';
const Stack = createNativeStackNavigator();
const Chat_MessageScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false ,animation: 'slide_from_right' }} >
            <Stack.Screen name="Message" component={Message} />
        </Stack.Navigator>
    )
}

export default Chat_MessageScreen