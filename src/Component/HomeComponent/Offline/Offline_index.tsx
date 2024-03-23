import { View, Text } from 'react-native'
import React from 'react'
import Headr from './Headr'
import Body from './Body'

const Offline_index = () => {
    return (
        <View style={{ backgroundColor: '#FFFFFF',borderTopLeftRadius:30,borderTopRightRadius:30 }}>
            <Headr />
            <Body />
        </View>
    )
}

export default Offline_index