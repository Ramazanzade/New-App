import { View, Text } from 'react-native'
import React from 'react'
import Date from '../../../assets/imge/Time-imge/Frame.svg'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Utils/common'
const Body = () => {
    return (
        <View style={{ flex: 1 , justifyContent:'center'}}>
            <View style={{}}>
                <View style={{ alignSelf: 'center' }}>
                    <Date  width={250} height={250}/>
                </View>
                <View style={{marginTop: '3%' }}>
                    <Text style={{ color: 'rgba(70, 71, 74, 1)', textAlign: 'center', fontSize: 22, width: SCREEN_WIDTH /1.5, alignSelf:'center' }}>Planlaşdırılmış gedişləriniz yoxdur</Text>
                    <Text style={{ color: 'rgba(118, 119, 122, 1)', textAlign: 'center', fontSize: 15 , width: SCREEN_WIDTH /1.1 , alignSelf:'center', marginTop:'2%'}}>Mövcud planlaşdırılan sifarişlərin siyahısı burada göstəriləcək</Text>
                </View>
            </View>
        </View>
    )
}

export default Body