import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Callsvg from '../../../assets/imge/Home-imge/Frame.svg'
import Close from '../../../assets/imge/Order_Cancellation-imge/close.svg'

const Scheduled_data_Modal = ({ close }: any) => {
    return (
        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, width: SCREEN_WIDTH - 60, alignSelf: 'center' }}>
            <View style={{ width: SCREEN_WIDTH - 80, alignSelf: 'center', marginVertical: '5%' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={{ color: 'rgba(0, 80, 155, 1)', fontSize: 15, fontWeight: '800' }}>$10.00</Text>
                                <Text style={{ color: 'rgba(82, 82, 86, 1)', fontSize: 12, fontWeight: '600', textAlign: 'center', alignSelf: 'center' }}> #sslk5</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={close}>
                                    <Close />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: 'rgba(118, 119, 122, 1)', width: SCREEN_WIDTH - 80, alignSelf: 'center', fontSize: 11 }}>16.20 - 18.20</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: '5%' }}>
                    <Text style={{ color: "rgba(144, 144, 148, 1)", fontSize: 10 }}>Qəbul nöqtəsi</Text>
                    <Text style={{ color: "rgba(16, 17, 20, 1)", fontSize: 11 }}>Şamaxı, yuxarı şilyan</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ position: 'relative' }}>
                                    <Image
                                        source={require('../../../assets/imge/Home-imge/imge.jpg')}
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
                <View style={{ marginTop: '5%' }}>
                    <Text style={{ color: "rgba(144, 144, 148, 1)", fontSize: 10 }}>Çatdırılma nöqtəsi</Text>
                    <Text style={{ color: "rgba(16, 17, 20, 1)", fontSize: 11 }}>Manti restaurant</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <View style={{ position: 'relative' }}>
                                    <Image
                                        source={require('../../../assets/imge/Home-imge/imge.jpg')}
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
                <View style={{ marginTop: '5%' }}>
                    <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '2%', }}>
                        <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 10 }}>Məhsul kateqoriyası</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: '1%', marginLeft: '1%' }}>
                            <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 11 }}>Süd və süd məhsulları</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '2%', marginTop: '3%', width: '60%' }}>
                            <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 10 }}>Kateqoriya</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '1%', marginLeft: '1%' }}>
                                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 11 }}>A və B</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '2%', marginTop: '3%', width: '35%' }}>
                            <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 10 }}>Məhsul çəkisi</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '1%', marginLeft: '1%' }}>
                                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 11 }}>45 kq</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Scheduled_data_Modal