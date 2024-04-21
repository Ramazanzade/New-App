import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Imgeinfo from '../../../assets/imge/Edit_Profile-imge/Contact us-amico 1.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Body = ({ navigation }: any) => {
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display:'flex', flexDirection:'column', justifyContent:'space-between', flex:1 }}>
            <View >
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 17, textAlign: 'center', fontWeight: '400',marginVertical:'5%' }}>Sürücü portalından istifadə etmək üçün sayta daxil ola bilərsiniz.</Text>
                <View style={{alignSelf:'center'}}>
                    <Imgeinfo width={400} height={400} />
                </View>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor:'rgba(0, 80, 155, 1)', borderRadius:10, padding:'4%', marginBottom:'10%'}}>
                    <Text style={{color:'#FFFFFF', textAlign:'center'}}>Sayta keçid et</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Body