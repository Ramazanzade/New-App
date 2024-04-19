import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from '../../../assets/imge/Chat-imge/1.svg'
import { SCREEN_WIDTH } from '../../../Utils/common';
import Imgepicture from '../../../assets/imge/Chat-imge/editprofile.svg'
const Messagecomponent = ({navigation}:any) => {
    return (
        <View>
            <View style={{ backgroundColor: 'rgba(0, 80, 155, 1)', width: SCREEN_WIDTH }}>
                <View style={{ display: 'flex', flexDirection: 'row', padding: '3%' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Tabbar',{screen:'ChatScreen'})}>
                        <Back width={50} height={50} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 25, color: '#FFFFFF', textAlign: 'center', alignSelf: 'center', justifyContent: 'center' }}>Cuxie Dəstək</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <View style={{justifyContent:'center',alignSelf:'center', marginVertical:'4%'}}><Imgepicture /></View>
                <Text style={{ color: 'rgba(47, 48, 51, 1)', fontSize: 17 }}>Cuxie Dəstəyə Xoş Gəlmisiniz</Text>
            </View>
        </View>
    )
}

export default Messagecomponent