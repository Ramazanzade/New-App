import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/Other_edit_Page_Component/F.A.Q/Headr'
import Body from '../../../Component/Other_edit_Page_Component/F.A.Q/Body'

const F_A_Q = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Headr navigation={navigation} />
      <Body navigation={navigation} />
    </View>
  )
}

export default F_A_Q