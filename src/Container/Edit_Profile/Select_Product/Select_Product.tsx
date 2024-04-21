import { View, Text } from 'react-native'
import React from 'react'
import Body from '../../../Component/EditProfilComponent/Select_Product_Componet/Body'
import Headr from '../../../Component/EditProfilComponent/Select_Product_Componet/Headr'

const Select_Product = ({navigation}:any) => {
    return (
        <View style={{backgroundColor:'#FFFFFF', flex:1}}>
            <Headr  navigation={navigation} />
            <Body  navigation={navigation} />
        </View>
    )
}

export default Select_Product