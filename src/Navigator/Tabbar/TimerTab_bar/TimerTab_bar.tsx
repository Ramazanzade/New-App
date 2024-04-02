import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PlannedScreen from '../../Stcak/TimeStack/PlannedStack/PlannedScreen';
import CompletedScreen from '../../Stcak/TimeStack/CompletedStack/CompletedScreen';
const Tab = createMaterialTopTabNavigator();
const TimerTab_bar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 25, },
                tabBarStyle: { backgroundColor: '#E5E7EB', borderRadius: 30, height: 60, borderWidth: 1, borderColor: '#A1A8B0' },
                tabBarActiveTintColor: '#199A8E',
                tabBarIndicatorStyle: { backgroundColor: 'transparent' },

            }}

        >
            <Tab.Screen name="Planlaşdırılmış" component={PlannedScreen} />
            <Tab.Screen name="Tamamlanmış" component={CompletedScreen} />
        </Tab.Navigator>
    )
}

export default TimerTab_bar