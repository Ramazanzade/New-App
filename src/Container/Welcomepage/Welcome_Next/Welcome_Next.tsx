import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Welcome_Next = ({navigation}:any) => {
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 , justifyContent:'center'}}>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' , }}>
                <View>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '600', fontSize: 20, textAlign: 'center' }}>Xoş gəlmisən, Nicat!</Text>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '300', textAlign: 'center', marginTop: '10%' }}>Müraciətiniz uğurla qəbul edildi, profilinizə uğurla daxil ola bilərsiniz.</Text>
                </View>
                <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop:'30%' }}>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(0, 80, 155, 1)', borderRadius: 10 }} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontSize: 17, padding: '3%' }}>Daxil ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Welcome_Next