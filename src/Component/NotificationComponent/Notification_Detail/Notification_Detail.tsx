import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon1 from '../../../assets/imge/Notification-imge/Icon set (1).svg'
import Icon2 from '../../../assets/imge/Notification-imge/Icon set.svg'
import Delet from '../../../assets/imge/Notification-imge/Frame.svg'
const data = [
    { id: 1, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər' , icon:Icon1},
    { id: 2, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Ödəniş', des:'Ödəniş' },
    { id: 3, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər' },
    { id: 4, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər' , des:'Xatırladıcı'},
    { id: 5, not: '#14l56 nömrəli sifarişin ləğv edildi', date: '2 saat əvvəl', text: ' • Sifarişlər' },

]
const Notification_Detail = () => {
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity>
                <Text style={{ color: 'red' }}>{item.not}</Text>
                <View>
                    {item.icon}
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}

export default Notification_Detail