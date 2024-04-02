import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/TimeComponent/PlannedComponent/Headr'
import Body from '../../../Component/TimeComponent/PlannedComponent/Body'

const Planned = () => {
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Headr />
            <Body />
        </View>
    )
}

export default Planned