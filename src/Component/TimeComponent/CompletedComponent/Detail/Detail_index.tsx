import { View, Text } from 'react-native'
import React from 'react'
import Body_time from './Body_time'
import Body_detail from './Body_detail'

const Detail_index = () => {
  return (
    <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
      <Body_time/>
      <Body_detail/>
    </View>
  )
}

export default Detail_index