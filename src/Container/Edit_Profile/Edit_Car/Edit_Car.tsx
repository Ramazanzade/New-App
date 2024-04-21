import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/EditProfilComponent/Edit_Car_Component/Headr'
import Body from '../../../Component/EditProfilComponent/Edit_Car_Component/Body'

const Edit_Car = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
        <Headr navigation={navigation}/>
        <Body/>
    </View>
  )
}

export default Edit_Car