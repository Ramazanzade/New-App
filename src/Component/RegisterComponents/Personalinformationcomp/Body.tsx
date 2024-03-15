import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Left from '../../../assets/imge/Register-imge/chevron_left.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Body = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: SCREEN_WIDTH, marginTop:'3%'}}>
                <TouchableOpacity style={{position:'absolute',alignItems:'center'}}>
                    <Left width={50} height={50}/>
                </TouchableOpacity>
                <Text style={{ flex: 1, color: 'rgba(16, 17, 20, 1)', fontSize: 20, textAlign: 'center',  alignSelf:'center' }}>Şəxsi məlumatlar</Text>
            </View>
        </View>
    )
}

export default Body
