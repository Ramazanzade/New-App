import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Leftd from '../../../assets/imge/Register-imge/chevron_left.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const Headr = ({navigation}:any) => {
    const Next = () =>{
        navigation.navigate('Personalinformation')
        console.log('salam');
        
    }
    return (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: SCREEN_WIDTH, marginTop: '3%' }} onPress={()=>Next()}>
                <TouchableOpacity style={{ position: 'absolute', alignItems: 'center' , marginLeft:'2%',}} onPress={()=>Next()} >
                    <Leftd width={50} height={50} />
                </TouchableOpacity>
                <Text style={{ flex: 1, color: 'rgba(16, 17, 20, 1)', fontSize: 20, textAlign: 'center', alignSelf: 'center' }}>Sürücü məlumatları</Text>
            </TouchableOpacity>
            <View style={{width:SCREEN_WIDTH-40, display:'flex', flexDirection:'row', alignSelf:'center', marginTop:'7%'}}>
                <View style={{backgroundColor:'rgba(0, 80, 155, 1)', height:7, width:SCREEN_WIDTH/3.6,borderRadius:10}}></View>
                <View style={{backgroundColor:'rgba(0, 80, 155, 1)', height:7, width:SCREEN_WIDTH/3.6, marginHorizontal:'2%', borderRadius:10}}></View>
                <View style={{backgroundColor:'rgba(227, 226, 230, 1)', height:7, width:SCREEN_WIDTH/3.6,borderRadius:10}}></View>
            </View>
        </View>
    )
}

export default Headr