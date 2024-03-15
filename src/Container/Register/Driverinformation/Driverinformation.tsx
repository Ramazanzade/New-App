import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/RegisterComponents/Driverinformationcomp/Headr'
import Body from '../../../Component/RegisterComponents/Driverinformationcomp/Body'
import Button from '../../../Component/RegisterComponents/Driverinformationcomp/Button'

const Driverinformation = ({ navigation }: any) => {
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 , justifyContent:'space-between'}}>
            <View>
                <Headr navigation={navigation} />
                <Body />
            </View>
            <View style={{marginBottom:'10%'}}>
                <Button navigation={navigation} />
            </View>
        </View>
    )
}

export default Driverinformation