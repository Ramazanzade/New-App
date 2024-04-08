import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Null_Page from '../../Component/NotificationComponent/Null_Page/Null_Page'
import { SCREEN_WIDTH } from '../../Utils/common'
import Notification_Detail from '../../Component/NotificationComponent/Notification_Detail/Notification_Detail'

const Notification = () => {
  const [view, setview] = useState(false)
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Text style={{ color: 'rgba(16, 17, 20, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', fontSize: 17 }}>Bildirişlər</Text>
      <View style={{ width: SCREEN_WIDTH, height: 1, backgroundColor: 'rgba(70, 70, 70, 1)', marginTop: '2%' }}></View>
      <TouchableOpacity onPress={() => setview(!view)}>
        <Text style={{ color: 'blue' }}>Test</Text>
      </TouchableOpacity>
      {
        view
          ?
          (
            <Notification_Detail />
          )
          :
          (
            <Null_Page />
          )
      }
    </View>
  )
}

export default Notification