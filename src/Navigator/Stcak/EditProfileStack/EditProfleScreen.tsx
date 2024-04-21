import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Edit_Home from '../../../Container/Edit_Profile/Edit_Home/Edit_Home';
import Edit_Car from '../../../Container/Edit_Profile/Edit_Car/Edit_Car';
import Edit_User from '../../../Container/Edit_Profile/Edit_User/Edit_User';
import Driver_Portal from '../../../Container/Edit_Profile/Driver_Portal/Driver_Portal';
import Select_Product from '../../../Container/Edit_Profile/Select_Product/Select_Product';
import Cart_Info from '../../../Container/Edit_Profile/Cart_info/Cart_Info';
import Add_NewCart from '../../../Container/Edit_Profile/Add_NewCart/Add_NewCart';
import Scan_NewCart from '../../../Container/Edit_Profile/Scan_NewCart/Scan_NewCart';
const Stack = createNativeStackNavigator();
const EditProfleScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Edit_Home" component={Edit_Home} />
            <Stack.Screen name="Edit_Car" component={Edit_Car} />
            <Stack.Screen name="Edit_User" component={Edit_User} />
            <Stack.Screen name="Driver_Portal" component={Driver_Portal} />
            <Stack.Screen name="Cart_Info" component={Cart_Info} />
            <Stack.Screen name="Select_Product" component={Select_Product} />
            <Stack.Screen name="Add_NewCart" component={Add_NewCart} />
            <Stack.Screen name="Scan_NewCart" component={Scan_NewCart} />
        </Stack.Navigator>
    )
}

export default EditProfleScreen