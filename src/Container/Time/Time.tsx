import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import TimerTab_bar from '../../Navigator/Tabbar/TimerTab_bar/TimerTab_bar'
const Time = () => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Text style={{ color: 'rgba(16, 17, 20, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', fontSize: 17 }}>Gedişlər</Text>
      <View style={{ height: 0.5, backgroundColor: 'rgba(66, 71, 81, 1)', marginTop: '2%' }}></View>
      <View style={{flex:1}}>
        <TimerTab_bar></TimerTab_bar>
      </View>
    </View>
  )
}

export default Time