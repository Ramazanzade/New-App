import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Body = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-evenly' , marginTop:"7%", marginBottom:'7%'}}>
            <View style={{ backgroundColor: '#FAF9FD', borderWidth: 1, borderColor: '#727782', borderRadius: 15, padding:'2%', paddingHorizontal:'5%' }}>
                <Text style={{ color: '#909094', fontSize: 10 ,}}>Planlaşdırılmış gedişlər</Text>
                <Text style={{ color: '#101114', fontWeight: '500', fontSize: 13 }}>0 aktiv gedişiniz var</Text>
            </View>
            <View style={{ backgroundColor: '#FAF9FD', borderWidth: 1, borderColor: '#727782', borderRadius: 15, padding:'2%', paddingHorizontal:'3%' }}>
                <Text style={{ color: '#909094', fontSize: 10 }}>Bu günün qazancı</Text>
                <Text style={{ color: '#101114', fontWeight: '500', fontSize: 13 }}>0.00 Azn</Text>
            </View>
        </View>
    )
}

export default Body