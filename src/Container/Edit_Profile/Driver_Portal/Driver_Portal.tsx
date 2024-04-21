import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/EditProfilComponent/Driver_Portal_Component/Headr'
import Body from '../../../Component/EditProfilComponent/Driver_Portal_Component/Body'

const Driver_Portal = ({navigation}:any) => {
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Headr navigation={navigation} />
            <Body navigation={navigation}/>
        </View>
    )
}

export default Driver_Portal