import { View, Text } from 'react-native'
import React from 'react'
import Body from '../../../Component/EditProfilComponent/Add_NewCart_Componet/Body'
import Headr from '../../../Component/EditProfilComponent/Add_NewCart_Componet/Headr'

const Add_NewCart = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
        <Headr  navigation={navigation}/>
        <Body  navigation={navigation}/>
    </View>
  )
}

export default Add_NewCart