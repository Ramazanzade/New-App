import { View, Text } from 'react-native'
import React from 'react'
import Body from '../../../Component/LoginComponents/OTP/Body'
import Button from '../../../Component/LoginComponents/OTP/Button'

const OTP = ({navigation}:any) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1, display: 'flex', justifyContent: 'space-between' }}>
    <View style={{marginTop:'10%'}}>
        <Body />
    </View>
    <View style={{ marginBottom: '10%' }}>
        <Button navigation={navigation} />
    </View>
</View>
  )
}

export default OTP