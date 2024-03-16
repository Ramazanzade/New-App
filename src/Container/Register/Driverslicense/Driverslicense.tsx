import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/RegisterComponents/Driverslicensecomp/Headr'
import Body from '../../../Component/RegisterComponents/Driverslicensecomp/Body'
import Button from '../../../Component/RegisterComponents/Driverslicensecomp/Button'

const Driverslicense = ({ navigation }: any) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1, justifyContent:'space-between' }}>
        <Headr navigation={navigation} />
        <Body />
      <View style={{marginBottom:'10%'}}>
        <Button navigation={navigation} />
      </View>
    </View>
  )
}

export default Driverslicense