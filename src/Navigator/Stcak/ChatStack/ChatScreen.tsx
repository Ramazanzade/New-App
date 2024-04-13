import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../../../Container/Chat/Chat';
import Ready_answer from '../../../Container/Chat/Ready_answer';
const Stack = createNativeStackNavigator();
const ChatScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Ready_answer" component={Ready_answer} />
        </Stack.Navigator>
    )
}

export default ChatScreen