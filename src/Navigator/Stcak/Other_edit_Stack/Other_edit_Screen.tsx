import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Delivery_Home from '../../../Container/Other_edit_Page/Delivery _nformation/Delivery_Home/Delivery_Home';
import Delivery_area from '../../../Container/Other_edit_Page/Delivery _nformation/Delivery_area/Delivery_area';
import Delivery_hours from '../../../Container/Other_edit_Page/Delivery _nformation/Delivery_hours/Delivery_hours';
import F_A_Q from '../../../Container/Other_edit_Page/F.A.Q/F_A_Q';
import Invite_Friend from '../../../Container/Other_edit_Page/Invite_Friend/Invite_Friend';
import Parameters from '../../../Container/Other_edit_Page/Parameters/Parameters';
const Stack = createNativeStackNavigator();
const Other_edit_Screen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Delivery_Home" component={Delivery_Home} />
            <Stack.Screen name="Delivery_area" component={Delivery_area} />
            <Stack.Screen name="Delivery_hours" component={Delivery_hours} />
            <Stack.Screen name="F_A_Q" component={F_A_Q} />
            <Stack.Screen name="Invite_Friend" component={Invite_Friend} />
            <Stack.Screen name="Parameters" component={Parameters} />
        </Stack.Navigator>
  )
}


export default Other_edit_Screen