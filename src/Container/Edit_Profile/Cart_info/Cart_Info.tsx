import { View, Text } from 'react-native'
import React from 'react'
import Body from '../../../Component/EditProfilComponent/Cart_info_Component/Body'
import Headr from '../../../Component/EditProfilComponent/Cart_info_Component/Headr'

const Cart_Info = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
        <Headr  navigation={navigation}/>
        <Body  navigation={navigation}/>
    </View>
  )
}

export default Cart_Info