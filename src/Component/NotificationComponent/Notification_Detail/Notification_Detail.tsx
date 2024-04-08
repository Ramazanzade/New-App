import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon1 from '../../../assets/imge/Notification-imge/Icon set (1).svg'
import Icon2 from '../../../assets/imge/Notification-imge/Icon set.svg'
import Delet from '../../../assets/imge/Notification-imge/Frame.svg'
import { SvgUri } from 'react-native-svg'
const data = [
    { id: 1, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', icon: Icon1, status: true },
    { id: 2, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Ödəniş', des: 'Ödəniş', icon: Icon2, status: true },
    { id: 3, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', icon: Icon1, status: false },
    { id: 4, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', des: 'Xatırladıcı', icon: Icon2, status: false },
    { id: 5, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər', icon: Icon1, status: false },
]
const Notification_Detail = () => {
    const renderItem = (item: any) => {
        const Icon = item.icon ? item.icon : null;

        return (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', marginVertical: '5%' }}>
                <View style={{alignSelf:'center', marginHorizontal:'2%'}}>
                    {
                        item.status === true
                            ?
                            (
                                <View style={{ width: 11, height: 11, backgroundColor: 'blue',borderRadius:20, alignSelf:'center' }}></View>
                            )
                            :
                            (
                                <View style={{ width: 10, height: 10, }}></View>
                            )
                    }
                </View>
                <View style={{ width: 45, height: 45, backgroundColor: 'rgba(70, 70, 70, 1)', borderRadius: 50,marginHorizontal:'1%' }}>
                    <View style={{ alignSelf: 'center', marginTop: '10%' }}>
                        {Icon && <Icon width={35} height={35} />}
                    </View>
                </View>
                <View style={{alignSelf:'center', marginHorizontal:'2%'}}>
                    <View style={{alignSelf:'center', justifyContent:'center'}}>
                        {/* <Text> Bu şəkildə yazılmalıdır</Text> */}
                        {
                            item.des
                                ?
                                (
                                    <Text style={{ color: 'rgba(48, 47, 42, 1)', fontSize: 15, fontWeight: '600' }}>{item.des}</Text>
                                )
                                :
                                (
                                    null
                                )
                        }
                        <Text style={{ color: 'rgba(109, 109, 109, 1)', fontWeight: '600', fontSize: 13 }}>{item.not}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ color: 'rgba(109, 109, 109, 1)', fontSize: 11 }}>{item.date}</Text>
                        <Text style={{ color: 'rgba(109, 109, 109, 1)', fontSize: 11 }}>{item.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id.toString()}
                style={{}}
            />
        </View>
    )
}

export default Notification_Detail