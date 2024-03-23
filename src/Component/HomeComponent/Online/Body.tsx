import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Body = () => {
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'#ECF1FF', borderRadius:10, padding:'2%', paddingHorizontal:'5%'}}>
                <View>
                    <Text style={{color:'rgba(82, 82, 86, 1)'}}>Yola düşmə vaxtı</Text>
                    <Text style={{color:'rgba(16, 17, 20, 1)', fontWeight:'600'}}>İndi</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{color:'rgba(16, 17, 20, 1)', fontWeight:'500', textAlign:'center', fontSize:20}}>16.00 Azn</Text>
                </View>
            </View>
            <View style={{borderWidth:0.5, borderColor:'#727782', borderRadius:10}}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <View>
                        <View style={{width:20,height:20,backgroundColor:'rgba(31, 94, 170, 1)', borderRadius:50}}></View>
                        <View></View>
                        <View></View>
                    </View>
                    <View></View>
                </View>
            </View>
        </View>
    )
}

export default Body