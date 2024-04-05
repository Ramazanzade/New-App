import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SCREEN_WIDTH } from '../../../../Utils/common'

const Body_time = () => {
  // <Text>Gələn datalar dimanik olacaq və stordan gləcək</Text>
  return (
    <View style={{marginTop:'5%'}}>
      <View style={{ display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH, alignSelf: 'center', justifyContent:'space-around' }}>
        {/* <Text>FlatListdən istifadə ediləcək , hələlik custom yazılır</Text> */}
        <View >
          <LinearGradient
            colors={[' rgba(64, 135, 233, 1)', 'rgba(43, 97, 173, 1)']}
            style={{borderRadius: 10 }}
          >
            <View style={{ paddingVertical: '14%', paddingHorizontal:'7%' }}>
              <Text style={{ fontSize: 13, color: 'rgba(255, 255, 255, 1)', fontWeight: '500', marginBottom:'8%' }}>Ödəniş</Text>
              <Text style={{ fontSize: 17, color: 'rgba(255, 255, 255, 1)', fontWeight: '700' }}>46.00 Azn</Text>
            </View>
          </LinearGradient>
        </View>
        <View>
          <LinearGradient
            colors={['rgba(231, 237, 253, 1)', 'rgba(225, 232, 251, 1)']}
            style={{borderRadius:10 }}
          >
            <View style={{ paddingVertical: '13%', paddingHorizontal:'7%' }}>
              <Text style={{ fontSize: 13, color: 'rgba(144, 144, 148, 1)', fontWeight: '500' , marginBottom:'5%'}}>Uğurlu gedişlər: <Text style={{ color: 'rgba(16, 17, 20, 1)' }}>24</Text></Text>
              <Text style={{ fontSize: 13, color: 'rgba(144, 144, 148, 1)', fontWeight: '500' }}>Bu ay gediş sayı: <Text style={{ color: 'rgba(16, 17, 20, 1)' }}>2</Text></Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

export default Body_time