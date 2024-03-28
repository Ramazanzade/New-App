import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import KM from '../../../../assets/imge/Home-imge/Icon set.svg'
import Oclock from '../../../../assets/imge/Home-imge/icon.svg'
import { SCREEN_WIDTH } from '../../../../Utils/common'
import Callsvg from '../../../../assets/imge/Home-imge/Frame.svg'
import Moresvg from '../../../../assets/imge/Home-imge/mor.svg'
import Order_details from '../Order_details/Order_details'
const EnoughView = () => {
    const [viewdetail, setviewdetail] = useState(false)
    const Handel = () => {
        setviewdetail(!viewdetail)
    }
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
            <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '5%', marginTop: '5%' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', display: "flex" }}>
                        <View style={{ width: 20, height: 20, backgroundColor: 'rgba(31, 94, 170, 1)', borderRadius: 50 }}></View>
                        <View style={{ width: 5, height: 165, backgroundColor: 'rgba(118, 119, 122, 1)', borderRadius: 0 }}></View>
                        <View style={{ width: 20, height: 20, backgroundColor: 'rgba(118, 119, 122, 1)', borderRadius: 50 }}></View>
                    </View>



                    {/*  Flatlist ilə yazılacaq */}
                    <View style={{ marginLeft: '3%' }}>
                        <View>
                            <Text style={{ color: "rgba(144, 144, 148, 1)", fontSize: 10 }}>Qəbul nöqtəsi</Text>
                            <Text style={{ color: "rgba(16, 17, 20, 1)", fontSize: 11 }}>Şamaxı, yuxarı şilyan</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ position: 'relative' }}>
                                            <Image
                                                source={require('../../../../assets/imge/Home-imge/imge.jpg')}
                                                style={{ width: 40, height: 40, borderRadius: 50 }}
                                            />
                                            <View style={{
                                                width: 13,
                                                height: 13,
                                                backgroundColor: '#FFFFFF',
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                borderRadius: 200
                                            }}>
                                                <View
                                                    style={{
                                                        width: 12,
                                                        height: 12,
                                                        backgroundColor: 'green',
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        right: 0,
                                                        borderRadius: 10
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: '5%' }}>
                                            <Text style={{ color: 'rgba(94, 94, 98, 1)', fontSize: 10 }}>Təhvil verən</Text>
                                            <Text style={{ color: 'rgba(70, 71, 74, 1)', fontSize: 11 }}>Əli Qasımov</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginRight: '5%' }}>
                                        <TouchableOpacity>
                                            <Callsvg width={30} height={30} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={{ marginTop: '10%' }}>
                            <Text style={{ color: "rgba(144, 144, 148, 1)", fontSize: 10 }}>Çatdırılma nöqtəsi</Text>
                            <Text style={{ color: "rgba(16, 17, 20, 1)", fontSize: 11 }}>Manti restaurant</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <View style={{ position: 'relative' }}>
                                            <Image
                                                source={require('../../../../assets/imge/Home-imge/imge.jpg')}
                                                style={{ width: 40, height: 40, borderRadius: 50 }}
                                            />
                                            <View style={{
                                                width: 13,
                                                height: 13,
                                                backgroundColor: '#FFFFFF',
                                                position: 'absolute',
                                                bottom: 10,
                                                right: 0,
                                                borderRadius: 20
                                            }}>
                                                <View
                                                    style={{
                                                        width: 12,
                                                        height: 12,
                                                        backgroundColor: 'green',
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        right: 0,
                                                        borderRadius: 10
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: '5%' }}>
                                            <Text style={{ color: 'rgba(94, 94, 98, 1)', fontSize: 10 }}>Təhvil alan</Text>
                                            <Text style={{ color: 'rgba(70, 71, 74, 1)', fontSize: 11 }}>Nadir Osmanov</Text>
                                        </View>
                                    </View>
                                    <View style={{ alignSelf: "center", marginRight: '5%' }}>
                                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                                            <Callsvg width={30} height={30} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: '5%' }}>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }} onPress={Handel}>
                        <Text style={{ color: 'rgba(64, 62, 62, 1)', fontSize: 10 }}>
                            Daha çox bax
                        </Text>
                        <Moresvg width={20} height={20} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{ marginTop: '0%' }}>
                {
                    viewdetail
                        ?
                        (
                            <Order_details />
                        )
                        :
                        (
                            null
                        )
                }
            </View>
        </View>
    )
}

export default EnoughView