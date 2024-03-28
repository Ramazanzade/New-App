import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'

const Headr = () => {
  return (
    <View>
      <Text style={{color:'rgba(16, 17, 20, 1)', textAlign:'center', marginTop:'5%', fontWeight:'500', fontSize:15}}>Sifarişi ləğv et</Text>
      <View style={{height:0.5, width:SCREEN_WIDTH, marginTop:'4%', backgroundColor:'rgba(70, 71, 74, 1)'}}></View>
      <View style={{marginTop:'5%'}} >
        <Text style={{color:'rgba(16, 17, 20, 1)', width:'90%', fontWeight:'300', alignSelf:'center', fontSize:12}}>Sifarişi ləğv etmə səbəbini aşağıda qeyd edin, Sifarişin ləğv edilməsi müştərinin sizdən şikayətçi olmasına səbəb ola bilər.</Text>
      </View>
    </View>
  )
}

export default Headr