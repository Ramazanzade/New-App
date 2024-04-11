import { View, Text, TouchableOpacity, FlatList, PanResponder } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Icon1 from '../../../assets/imge/Notification-imge/Icon set (1).svg'
import Icon2 from '../../../assets/imge/Notification-imge/Icon set.svg'
import Delet from '../../../assets/imge/Notification-imge/Frame.svg'
import { SwipeListView } from 'react-native-swipe-list-view';
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
            <View style={{ flex: 1, flexDirection: 'row', marginVertical: '5%' }}>
                <View style={{ alignSelf: 'center', marginHorizontal: '2%' }}>
                    {
                        item.status === true
                            ?
                            (
                                <View style={{ width: 11, height: 11, backgroundColor: 'blue', borderRadius: 20, alignSelf: 'center' }}></View>
                            )
                            :
                            (
                                <View style={{ width: 10, height: 10, }}></View>
                            )
                    }
                </View>
                <View style={{ width: 45, height: 45, backgroundColor: 'rgba(70, 70, 70, 1)', borderRadius: 50, marginHorizontal: '1%' }}>
                    <View style={{ alignSelf: 'center', marginTop: '10%' }}>
                        {Icon && <Icon width={35} height={35} />}
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginHorizontal: '2%' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
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
            </View>

        )
    }
    const renderHiddenItem = (data: any) => (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    bottom: 0,
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    width: 55,
                    backgroundColor: 'rgba(92, 146, 225, 1)',
                    right: 0,
                    height: 70,
                    alignSelf: 'center'

                }}
                onPress={() => {
                    console.log('Delete pressed', data.item);
                }}
            >
                <Delet width={25} height={25} />
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={{ flex: 1 }}>
            <SwipeListView
                data={data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id.toString()}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75}
            />
        </View>
    )
}

export default Notification_Detail