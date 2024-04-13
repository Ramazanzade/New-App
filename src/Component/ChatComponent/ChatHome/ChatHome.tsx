import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Chat from '../../../assets/imge/Chat-imge/Frame.svg'
import Left from '../../../assets/imge/Chat-imge/15.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Data from '../Fake_data.json'
import İmge from "../../../assets/imge/Chat-imge/12.svg"
import İmge1 from "../../../assets/imge/Chat-imge/13.svg"
import İmge2 from "../../../assets/imge/Chat-imge/14.svg"
import İmge3 from "../../../assets/imge/Chat-imge/1.svg"

const ChatHome = () => {
    const icons = {
        truck:Order,
        heart:Favorites,
        star:Reviews,
        add:Informations,
};
    const renderItem = (item: any) => {
        return (
            <View>

                <Text style={{color:'red'}}>{item.text}</Text>
            </View>
        )
    }
    return (
        <View>
            <View>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', textAlign: 'center', fontSize: 22, marginTop: '3%' }}>Sizə necə kömək edə bilərik?</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#4078C5', borderRadius: 5, marginTop: '3%', display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 40, alignSelf: 'center', justifyContent: 'space-between', padding: '4%' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'center', marginRight: '5%' }}>
                        <Chat />
                    </View>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 17, textAlign: 'center', alignSelf: 'center' }}>Cuxie Chata sual ver</Text>
                </View>
                <Left width={37} height={37} />
            </TouchableOpacity>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <View>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)' }}>Məşhur dəstək mövzuları</Text>
                </View>
                <View>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) => renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    
                        
                    />
                </View>
            </View>
        </View>
    )
}

export default ChatHome