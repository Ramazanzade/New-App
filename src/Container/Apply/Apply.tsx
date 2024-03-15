import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import Applayimge from '../../assets/imge/Applyimge/wysiwyg.svg'

const Apply = ({navigation}:any) => {
    const NextPage=()=>{
        navigation.navigate('RegisterScreen')
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent:'space-between' }}>
            <View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '7%' ,}}>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 21, fontWeight: '600' }}>Siz Cuxie Çatdırılma Partnyoru olmaq istəyirsiniz?</Text>
                <Text style={{ color: 'rgba(0, 0, 0, 1)', fontSize: 13, fontWeight: '300', marginTop: '2%' }}>O zaman aşağıdakı addımlardan keçin.</Text>
            </View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', backgroundColor: "rgba(236, 241, 255, 1)", borderRadius: 10, marginTop:'13%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH / 1.5, margin: '5%' }}>
                    <View style={{ marginRight: '2%' }}>
                        <Applayimge width={40} height={40} />
                    </View>
                    <View>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 17, fontWeight: '500' }}>Müraciətiniz qeydə alındı</Text>
                        <Text style={{ color: 'rgba(70, 71, 74, 1)', fontSize: 13,marginTop:'2%' }}>Müraciətiniz haqqında məlumat nömrənizə göndəriləcək</Text>
                    </View>
                </View>
                <View style={{alignSelf:'flex-end', margin:'5%', marginBottom:'7%'}}>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(0, 60, 119, 1)', borderRadius: 8 }} onPress={()=>NextPage()}>
                        <Text style={{ color: '#FFFFFF', paddingHorizontal:'7%', fontSize:15, paddingVertical:'4%' }}>Müraciət et</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginBottom:'10%'}}>
                <Text style={{color:'rgba(82, 82, 86, 1)'}}>Profiliniz var?</Text>
                <TouchableOpacity>
                    <Text style={{color:'rgba(16, 17, 20, 1)', fontWeight:'600', paddingLeft:5}}>Daxil olun</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Apply