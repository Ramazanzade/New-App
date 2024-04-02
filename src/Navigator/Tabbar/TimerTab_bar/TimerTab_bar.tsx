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
                tabBarLabelStyle: { fontSize: 13, },
                tabBarStyle: { height: 50, borderWidth:0.5 , borderColor:'rgba(66, 71, 81, 1)'},
                tabBarActiveTintColor: 'rgba(16, 17, 20, 1)',
                tabBarIndicatorStyle: { backgroundColor: 'rgba(0, 80, 155, 1)' },
                
            }}

        >
            <Tab.Screen name="Planlaşdırılmış" component={PlannedScreen} />
            <Tab.Screen name="Tamamlanmış" component={CompletedScreen} />
        </Tab.Navigator>
    )
}

export default TimerTab_bar