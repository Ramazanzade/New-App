import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/EditProfilComponent/Edit_User_Component/Headr'
import Body from '../../../Component/EditProfilComponent/Edit_User_Component/Body'

const Edit_User = ( {navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
        <Headr  navigation={navigation}/>
        <Body  navigation={navigation}/>
    </View>
  )
}

export default Edit_User