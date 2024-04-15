import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import { useRoute } from '@react-navigation/native'
import Icongoback from '../../assets/imge/Chat-imge/11.svg'
import Image from '../../assets/imge/Chat-imge/12.svg'
const Ready_answer = ({ route, navigation }: any) => {
    const { data } = route.params;
    return (
        <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <Text style={{ color: 'rgba(16, 17, 20, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', fontSize: 17 }}>Dəstək</Text>
            <View style={{ width: SCREEN_WIDTH, height: 1, backgroundColor: 'rgba(70, 70, 70, 1)', marginTop: '2%' }}></View>
            <View>
                <View style={{display:'flex', flexDirection:'row', width:SCREEN_WIDTH-40, alignSelf:'center', marginVertical:'5%'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
                        <Icongoback width={55} height={55} />
                    </TouchableOpacity>
                    <View style={{alignSelf:'center'}}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize:20, fontWeight:'400', alignSelf:'center'}}>{data.text}</Text>
                    </View>
                </View>
                <View style={{width:SCREEN_WIDTH-40, alignSelf:'center'}}>
                    <Image width={350} height={300}/>
                </View>
                <View style={{width:SCREEN_WIDTH-40, alignSelf:'center'}}>
                    <Text style={{color:'rgba(94, 94, 98, 1)'}}>{data.detail}</Text>
                </View>
            </View>

        </View>
    )
}

export default Ready_answer