import { View, Text } from 'react-native'
import React from 'react'
import Headr from '../../../Component/Other_edit_Page_Component/Invite_Friend_copmonent/Headr'
import Body from '../../../Component/Other_edit_Page_Component/Invite_Friend_copmonent/Body'

const Invite_Friend = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Headr navigation={navigation} />
            <Body navigation={navigation} />
        </View>
    )
}

export default Invite_Friend