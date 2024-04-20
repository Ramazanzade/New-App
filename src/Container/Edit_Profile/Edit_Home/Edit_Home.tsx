import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/EditProfilComponent/Edit_Home_Component/Headr'
import Body from '../../../Component/EditProfilComponent/Edit_Home_Component/Body'

const Edit_Home = ({navigation}:any) => {
    return (
        <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <Headr navigation={navigation} />
            <Body navigation={navigation}/>
        </View>
    )
}

export default Edit_Home