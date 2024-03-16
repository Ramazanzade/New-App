import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Vector from '../../../assets/imge/Welcome-imge/Vector.svg'
const Welcome_user = ({ navigation }: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome_Next')

        }, 2000)
    },)
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '10%' }}>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 25, fontWeight: '600' }}>Xoş gəlmisən, Nicat!</Text>
                <View style={{ backgroundColor: 'rgba(236, 241, 255, 1)', display: 'flex', flexDirection: 'row', padding: '5%', borderRadius: 10, marginTop: '5%' }}>
                    <View style={{ marginTop: '2%' }}>
                        <Vector width={30} height={30} />
                    </View>
                    <View style={{ marginLeft: '3%' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 18, fontWeight: '600' }}>Müraciətiniz qeydə alındı</Text>
                        <Text style={{ color: 'rgba(70, 71, 74, 1)', fontSize: 12, width: '60%', marginBottom: '5%' }}>Müraciətiniz haqqında məlumat nömrənizə göndəriləcək</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Welcome_user