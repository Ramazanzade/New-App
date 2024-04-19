import { View, Text } from 'react-native'
import React from 'react'
import Headr from './Headr'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'

const Profile_Modal = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF', width:SCREEN_WIDTH/1.5, height:SCREEN_HEIGHT}}>
        <Headr/>
    </View>
  )
}

export default Profile_Modal