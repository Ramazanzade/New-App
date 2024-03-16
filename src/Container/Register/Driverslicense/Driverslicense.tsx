import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/RegisterComponents/Driverslicensecomp/Headr'
import Body from '../../../Component/RegisterComponents/Driverslicensecomp/Body'

const Driverslicense = ({navigation}:any) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Headr navigation={navigation} />
      <Body/>
    </View>
  )
}

export default Driverslicense