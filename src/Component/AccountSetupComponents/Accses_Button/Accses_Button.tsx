import { View, Text, TouchableOpacity, TouchableHighlight, TouchableHighlightComponent } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Phone from '../../../assets/imge/Accountsetup-imge/icon.svg'
const Accses_Button = ({ navigation, setloading }: any) => {
    const Nextlogin = () => {
        navigation.navigate('LoginScreen')

    }
    const Nextregister = () => {
        // App get
        navigation.navigate('ApplyScreen')

    }
    return (
        <View>
            <TouchableOpacity style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', borderWidth: 1, borderColor: '#4078C5', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }} onPressIn={()=>Nextlogin()} delayLongPress={10}>
                <View style={{ alignSelf: 'center', marginLeft: '5%' }}>
                    <Phone width={30} height={30} />
                </View>
                <View style={{ marginLeft: '-5%' }}>
                        <Text style={{ color: '#4078C5', fontSize: 15, fontWeight: '500', paddingVertical: '3%' }}>Telefon nömrəsi ilə daxil olun</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', backgroundColor: '#00509B', borderRadius: 10, marginTop: '5%' }} onPressIn={() => Nextregister()}>
                <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontSize: 15, fontWeight: '500', paddingVertical: '3%' }}>İndi qoşulun</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Accses_Button