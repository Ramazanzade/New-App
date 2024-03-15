import { View, Text } from 'react-native'
import React from 'react'
import Body from '../../../Component/RegisterComponents/Personalinformationcomp/Body'
import Headr from '../../../Component/RegisterComponents/Personalinformationcomp/Headr'
import Button from '../../../Component/RegisterComponents/Personalinformationcomp/Button'

const Personalinformation = ({navigation}:any) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent:'space-between' }}>
            <View>
                <Headr navigation={navigation} />
                <Body />
            </View>
            <View style={{marginBottom:'10%'}}>
                <Button navigation={navigation}/>
            </View>
        </View>
    )
}

export default Personalinformation