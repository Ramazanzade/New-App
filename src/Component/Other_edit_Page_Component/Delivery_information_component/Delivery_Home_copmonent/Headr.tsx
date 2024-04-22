import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Go from '../../../../assets/imge/Edit_Profile-imge/Frame.svg'
import { SCREEN_WIDTH } from '../../../../Utils/common'

const Headr = ({navigation}:any) => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 20, alignSelf: 'center', marginTop: '5%', justifyContent: 'space-between' }}>
                <View>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={()=>navigation.navigate('Tabbar',{screen:'HomeScreen'})}>
                        <Go width={50} height={50} />
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 20, textAlign: 'center' }}>Çatdırılma məlumatları</Text>
                </View>
                <View>
                    {/*  justifyContent: 'space-between' görə belə yazmışam  */}
                    <Text style={{color:'#FFFFFF'}}>Salma</Text>
                </View>
            </View>
            <View style={{width:SCREEN_WIDTH, height:1, backgroundColor:'rgba(144, 144, 148, 1)', marginTop:'5%'}}></View>

        </View>
    )
}
export default Headr