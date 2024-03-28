import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../Component/Order_CancellationComponent/Headr'
import Body from '../../Component/Order_CancellationComponent/Body'
import CheckBox from '@react-native-community/checkbox';

const Order_Cancellation = ({navigation}:any) => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1, }}>
        <Headr/>
        <Body navigation={navigation} />
    </View>
  )
}

export default Order_Cancellation