import { View, Text } from 'react-native'
import React from 'react'
import Headr from './Headr'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
import Body from './Body'

const Profile_Modal = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#FFFFFF', width:SCREEN_WIDTH/1.5, height:SCREEN_HEIGHT}}>
        <Headr navigation={navigation}/>
        <Body navigation={navigation}/>
    </View>
  )
}

export default Profile_Modal