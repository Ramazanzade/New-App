import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import KM1 from '../../../../assets/imge/Home-imge/Icon set.svg'
import Oclock1 from '../../../../assets/imge/Home-imge/icon.svg'
const Order_details = () => {
    return (
            <ScrollView style={{height:'35%'}}>
                <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '2%', marginTop: '2%' }}>
                    <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 11 }}>Ümumi</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '2%', marginLeft: '1%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <KM1 width={20} height={20} />
                            <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 11 }}>62 km</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '5%' }}>
                            <Oclock1 width={20} height={20} />
                            <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 11 }}>2 saat</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ color: 'rgba(0, 80, 155, 1)', fontSize: 15, fontWeight: '400' }}>Çatdırılma 1</Text>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '2%', marginTop: '2%' }}>
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
                <View style={{ borderWidth: 0.5, borderColor: '#727782', borderRadius: 10, padding: '2%', marginTop: '2%' }}>
                    <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 10 }}>Satıcının qeydi</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '1%', marginLeft: '1%' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 11 }}>Zəhmət olmasa çatanda zəng edin. Qırmızı binadır</Text>
                    </View>
                </View>
            </ScrollView>
    )
}

export default Order_details