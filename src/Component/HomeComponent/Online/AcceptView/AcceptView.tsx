import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import KM from '../../../../assets/imge/Home-imge/Icon set.svg'
import Oclock from '../../../../assets/imge/Home-imge/icon.svg'
import { SCREEN_WIDTH } from '../../../../Utils/common'
const AcceptView = () => {
    return (
        <View style={{ width: SCREEN_WIDTH- 40, alignSelf: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ECF1FF', borderRadius: 10, padding: '2%', paddingHorizontal: '5%', }}>
                <View>
                    <Text style={{ color: 'rgba(82, 82, 86, 1)' }}>Yola düşmə vaxtı</Text>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '600' }}>İndi</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '500', textAlign: 'center', fontSize: 20 }}>16.00 Azn</Text>
                </View>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '5%', marginVertical: '2%' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', display: "flex" }}>
                        <View style={{ width: 20, height: 20, backgroundColor: 'rgba(31, 94, 170, 1)', borderRadius: 50 }}></View>
                        <View style={{ width: 5, height: 130, backgroundColor: 'rgba(31, 94, 170, 1)', borderRadius: 0 }}></View>
                        <View style={{ width: 20, height: 20, backgroundColor: 'rgba(31, 94, 170, 1)', borderRadius: 50 }}></View>
                    </View>



                    {/*  Flatlist ilə yazılacaq */}
                    <View style={{ marginLeft: '3%' }}>
                        <View>
                            <Text style={{ color: "rgba(144, 144, 148, 1)",fontSize:10 }}>Qəbul nöqtəsi</Text>
                            <Text style={{ color: "rgba(16, 17, 20, 1)", marginTop: '2%', fontSize: 11 }}>Şamaxı, yuxarı şilyan</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <KM width={20} height={20} />
                                    <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize:11 }}>62 km</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '5%' }}>
                                    <Oclock width={20} height={20} />
                                    <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize:11 }}>2 saat</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: '10%' }}>
                            <Text style={{ color: "rgba(144, 144, 148, 1)", fontSize:10}}>Çatdırılma nöqtəsi</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ color: "rgba(16, 17, 20, 1)", marginTop: '2%', fontSize: 11 }}>Manti restaurant</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <KM width={20} height={20} />
                                            <Text style={{ color: 'rgba(144, 144, 148, 1)' , fontSize:11 }}>62 km</Text>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '5%' }}>
                                            <Oclock width={20} height={20} />
                                            <Text style={{ color: 'rgba(144, 144, 148, 1)' , fontSize:11}}>2 saat</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginLeft: '25%', marginTop: '2%' }}>
                                    <Text style={{ color: 'rgba(144, 144, 148, 1)' , fontSize:11}}>Məhsul çəkisi</Text>
                                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 15, textAlign: 'right' }}>45 kg</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AcceptView