import { View, Text } from 'react-native'
import React from 'react'
import Null_Page from '../../Component/NotificationComponent/Null_Page/Null_Page'
import { SCREEN_WIDTH } from '../../Utils/common'

const Notification = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
      <Text style={{ color: 'rgba(16, 17, 20, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', fontSize: 17 }}>Bildirişlər</Text>
      <Null_Page />
    </View>
  )
}

export default Notification