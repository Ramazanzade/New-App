import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../../Component/Other_edit_Page_Component/Delivery_information_component/Delivery_hours_coponent/Headr'
import Body from '../../../../Component/Other_edit_Page_Component/Delivery_information_component/Delivery_hours_coponent/Body'

const Delivery_hours = ({navigation}:any) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Headr navigation={navigation} />
            <Body navigation={navigation} />
        </View>
    )
}

export default Delivery_hours