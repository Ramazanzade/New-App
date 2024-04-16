import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Chat from '../../../assets/imge/Chat-imge/Frame.svg'
import Left from '../../../assets/imge/Chat-imge/15.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Data from '../Fake_data.json'
import İmge from "../../../assets/imge/Chat-imge/12.svg"
import İmge1 from "../../../assets/imge/Chat-imge/13.svg"
import İmge2 from "../../../assets/imge/Chat-imge/14.svg"
import İmge3 from "../../../assets/imge/Chat-imge/Picture 2.svg"

const ChatHome = ({ navigation }: any) => {
    const [data , setdata]=useState(Data)    
    const icons = {
        Imge1: İmge,
        Imge2: İmge1,
        Imge3: İmge2,
        Imge4: İmge,
    };
    type Item = {
        imge: string;
        text: string;
        detail: string;
        id: number
    };
    const Touc = (data: any) => {
        navigation.navigate('Ready_answer', { data: Data });
        console.log(data);


    }
    const renderItem = ({ item }: { item: Item }) => {
        const Icon = icons[item.imge as keyof typeof icons];
        return (
            <TouchableOpacity style={{ justifyContent: 'space-between', marginTop: '7%' }} onPress={() => {
                navigation.navigate('Ready_answer', { data: item });
            }}>
                <Icon />
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 11, width: '70%' }}>{item.text}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <View>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', textAlign: 'center', fontSize: 22, marginTop: '3%' }}>Sizə necə kömək edə bilərik?</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#4078C5', borderRadius: 5, marginTop: '3%', display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 40, alignSelf: 'center', justifyContent: 'space-between', padding: '4%' }} onPress={()=>navigation.navigate('Chat_MessageScreen')}>
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
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        key={2}
                        style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </View>
            </View>
        </View>
    )
}

export default ChatHome