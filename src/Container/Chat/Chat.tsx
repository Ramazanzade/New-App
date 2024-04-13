import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import ChatHome from '../../Component/ChatComponent/ChatHome/ChatHome'

const Chat = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Text style={{ color: 'rgba(16, 17, 20, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', fontSize: 17 }}>Dəstək</Text>
      <View style={{ width: SCREEN_WIDTH, height: 1, backgroundColor: 'rgba(70, 70, 70, 1)', marginTop: '2%' }}></View>
      <ChatHome navigation={navigation}/>
    </View>
  )
}

export default Chat