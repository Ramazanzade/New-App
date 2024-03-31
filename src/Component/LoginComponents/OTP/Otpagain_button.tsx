import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Otpagain_button = ({onPress}:any) => {
  return (
   <TouchableOpacity onPress={onPress}>
    <Text style={{color:'rgba(118, 119, 122, 1)'}}>Kod təkrar göndərilsin?</Text>
    <View style={{backgroundColor:'rgba(118, 119, 122, 1)', height:0.5, width:180, marginTop:'1%'}}></View>
   </TouchableOpacity>
  )
}

export default Otpagain_button