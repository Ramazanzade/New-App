import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import { RadioButton } from 'react-native-paper';
import Imge from '../../assets/imge/Other_edit_Page-imge/Facebook.svg'
import Imge2 from '../../assets/imge/Other_edit_Page-imge/ühatsap.svg'
import Imge3 from '../../assets/imge/Other_edit_Page-imge/instagram.svg'
import Imge4 from '../../assets/imge/Other_edit_Page-imge/telegram.svg'
import Button from '../../assets/imge/Other_edit_Page-imge/Button.svg'
const data = [
    { id: 1, text: 'Facebook', imge: 'imge1' },
    { id: 2, text: 'Whatsapp', imge: 'imge2' },
    { id: 3, text: 'Instagram', imge: 'imge3' },
    { id: 4, text: 'Telegram', imge: 'imge4' },
]
const Invite_Friend_Modal = () => {
    const icons = {
        imge1: Imge,
        imge2: Imge2,
        imge3: Imge3,
        imge4: Imge4,
    };

    type Item = {
        imge: string;
        text: string
        id: any
    };
    const renderItem = ({ item }: { item: Item }) => {
        const Imgeicon = icons[item.imge as keyof typeof icons];
        return (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                <Imgeicon width={40} height={40} />
                <Text style={{ color: 'rgba(70, 71, 74, 1)', fontSize: 10 }}>{item.text}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={{ backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
                <View>
                    <Text style={{ color: '#101114', textAlign: 'center', fontSize: 20, marginVertical: '2%' }}>Paylaş</Text>
                    <View style={{ backgroundColor: '#76777A', width: SCREEN_WIDTH, height: 1 }}></View>
                </View>
                <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
                    <FlatList
                        data={data}
                        renderItem={(item: any) => renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                    />
                </View>
                <View style={{width:SCREEN_WIDTH-40, alignSelf:'center'}}>
                    <Text style={{ color: 'rgba(70, 71, 74, 1)', }}>Share link</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop:'5%'}}>
                        <View style={{ borderWidth: 1, borderColor: 'rgba(208, 213, 221, 1)', padding: '2%', }}>
                            <Text style={{ color: 'rgba(16, 24, 40, 1)' }}>join.untitledui.com/project</Text>
                        </View>
                        <Button width={60} height={60}/>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Invite_Friend_Modal