import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Go from '../../../assets/imge/Edit_Profile-imge/Frame.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Headr from '../../../Component/Other_edit_Page_Component/Parametrlər_component/Headr'
import Body from '../../../Component/Other_edit_Page_Component/Parametrlər_component/Body'

const Parameters = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Headr navigation={navigation} />
            <Body navigation={navigation} />
        </View>
        )
}

export default Parameters