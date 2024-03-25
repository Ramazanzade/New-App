import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import KM from '../../../../assets/imge/Home-imge/Icon set.svg'
import Oclock from '../../../../assets/imge/Home-imge/icon.svg'
import { SCREEN_WIDTH } from '../../../../Utils/common'
const EnoughView = () => {
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ECF1FF', borderRadius: 10, padding: '2%', paddingHorizontal: '5%', }}>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '600', fontSize: 15 }}>#123456</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '500', textAlign: 'center', fontSize: 20 }}>16.00 Azn</Text>
                </View>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '5%', marginVertical: '5%' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', display: "flex" }}>
                        <View style={{ width: 20, height: 20, backgroundColor: 'rgba(31, 94, 170, 1)', borderRadius: 50 }}></View>
                        <View style={{ width: 5, height: 180, backgroundColor: 'rgba(118, 119, 122, 1)', borderRadius: 0 }}></View>
                        <View style={{ width: 20, height: 20, backgroundColor: 'rgba(118, 119, 122, 1)', borderRadius: 50 }}></View>
                    </View>



                    {/*  Flatlist ilə yazılacaq */}
                    <View style={{ marginLeft: '3%' }}>
                        <View>
                            <Text style={{ color: "rgba(144, 144, 148, 1)", }}>Qəbul nöqtəsi</Text>
                            <Text style={{ color: "rgba(16, 17, 20, 1)", marginTop: '2%', fontSize: 15 }}>Şamaxı, yuxarı şilyan</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={{ position: 'relative' }}>
                                        <Image
                                            source={require('../../../../assets/imge/Home-imge/imge.jpg')}
                                            style={{ width: 50, height: 50, borderRadius: 50 }}
                                        />
                                        <View style={{
                                            width: 17,
                                            height: 17,
                                            backgroundColor: '#FFFFFF',
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            borderRadius: 20
                                        }}>
                                            <View
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                    backgroundColor: 'green',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    right: 0,
                                                    borderRadius: 10
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{marginLeft:'5%'}}>
                                        <Text style={{ color: 'rgba(94, 94, 98, 1)', fontSize:13 }}>Təhvil verən</Text>
                                        <Text style={{ color: 'rgba(70, 71, 74, 1)', fontSize:15 }}>Əli Qasımov</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: '10%' }}>
                            <Text style={{ color: "rgba(144, 144, 148, 1)", }}>Çatdırılma nöqtəsi</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ color: "rgba(16, 17, 20, 1)", marginTop: '2%', fontSize: 15 }}>Manti restaurant</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5%' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <KM width={25} height={25} />
                                            <Text style={{ color: 'rgba(144, 144, 148, 1)' }}>62 km</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginLeft: '10%', marginTop: '2%' }}>
                                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 23, textAlign: 'right' }}>45 kg</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EnoughView