import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Body_time = () => {
  return (
    <View>
      <View>
        {/* <Text>FlatListdən istifadə ediləcək , hələlik custom yazılır</Text> */}
        <View>
          <LinearGradient
            colors={['rgba(43, 97, 173, 1)', ' rgba(64, 135, 233, 1)']}
          // style={{ flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255, 255, 255, 1)', fontWeight: '500' }}>Ödəniş</Text>
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255, 255, 255, 1)', fontWeight: '500' }}>46.00 Azn</Text>
          </LinearGradient>
        </View>
        <View>
          <LinearGradient
            colors={['rgba(231, 237, 253, 1)', 'rgba(225, 232, 251, 1)']}
          // style={{ flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ textAlign: 'center', fontSize: 13, color: 'rgba(144, 144, 148, 1)', fontWeight: '500' }}>Uğurlu gedişlər: <Text style={{color:'rgba(16, 17, 20, 1)'}}>24</Text></Text>
            <Text style={{ textAlign: 'center', fontSize: 13, color: 'rgba(144, 144, 148, 1)', fontWeight: '500' }}>Bu ay gediş sayı: <Text style={{color:'rgba(16, 17, 20, 1)'}}>2</Text></Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

export default Body_time