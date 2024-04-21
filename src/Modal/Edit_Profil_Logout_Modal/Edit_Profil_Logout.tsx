import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
const Edit_Profil_Logout = ({Close}:any) => {
    return (
        <View style={{ backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
                <View>
                    <Text style={{ color: '#101114', textAlign: 'center', fontSize: 20, marginVertical: '2%' }}>Çıxış et</Text>
                    <View style={{ backgroundColor: '#76777A', width: SCREEN_WIDTH, height: 1 }}></View>
                </View>
                <View style={{marginVertical:'7%'}}>
                    <Text style={{color:'rgba(26, 28, 30, 1)', textAlign:'center', fontSize:20}}>Çıxış etmək istəyirsiniz?</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:SCREEN_WIDTH-40, alignSelf:'center', marginBottom:'7%'}}>
                    <TouchableOpacity style={{borderWidth:1, borderColor:'rgba(0, 60, 119, 1)', borderRadius:10, paddingVertical:'3%', paddingHorizontal:'15%'}} onPress={Close}>
                        <Text style={{color:'rgba(0, 60, 119, 1)'}}>Ləğv et</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'rgba(0, 80, 155, 1)', borderRadius:10, paddingVertical:'3%', paddingHorizontal:'19%'}}>
                        <Text style={{color:'rgba(255, 255, 255, 1)'}}>Bəli</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Edit_Profil_Logout