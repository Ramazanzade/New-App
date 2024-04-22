import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../../Component/Other_edit_Page_Component/Delivery_information_component/Delivery_Home_copmonent/Headr'
import Body from '../../../../Component/Other_edit_Page_Component/Delivery_information_component/Delivery_Home_copmonent/Body'

const Delivery_Home = ({navigation}:any) => {
  return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
        <Headr navigation={navigation}/>
        <Body navigation={navigation}/>
    </View>
  )
}

export default Delivery_Home