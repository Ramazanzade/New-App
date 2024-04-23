import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Search from '../../../assets/imge/Other_edit_Page-imge/Icon set (6).svg'
import Plus from '../../../assets/imge/Other_edit_Page-imge/2.svg'
const Body = ({ navigation }: any) => {
    const data = [
        { id: 1, text: 'Cuxie nədir?', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam rem modi possimus dolorem molestiae ratione necessitatibus illum nihil ducimus?' },
        { id: 2, text: 'Niyə Cuxie?', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam rem modi possimus dolorem molestiae ratione necessitatibus illum nihil ducimus?' },
        { id: 3, text: 'Ödənişi necə ala bilərəm?', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam rem modi possimus dolorem molestiae ratione necessitatibus illum nihil ducimus?' },
        { id: 4, text: 'Sifarişi ləğv etsəm nə olar?', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam rem modi possimus dolorem molestiae ratione necessitatibus illum nihil ducimus?' },
        { id: 5, text: 'Problem yarandıqda nə etməliyəm?', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam rem modi possimus dolorem molestiae ratione necessitatibus illum nihil ducimus?' },
        { id: 6, text: 'Müştəri ilə bağlı problem yaşasam nə etməliyəm?', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam rem modi possimus dolorem molestiae ratione necessitatibus illum nihil ducimus?' },

    ]
    const [search, setsearch] = useState('')
    const [show, setshow] = useState(false)
    const renderitem = ({ item }: any) => {
        return (
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%' }}>
                    <View>
                        <Text style={{ color: 'rgba(26, 28, 30, 1)' }}>{item.text}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => setshow(show === item.id ? null : item.id)}>
                            <Plus />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    {
                        show === item.id && (<Text style={{ color: 'rgba(94, 94, 98, 1)', marginTop: '2%' }}>{item.detail}</Text>)
                    }
                </View>
                <View style={{ width: '100%', height: 0.5, backgroundColor: 'rgba(94, 94, 98, 1)', marginTop: '3%' }}></View>
            </View>
        )
    }
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', justifyContent:'space-between', display:'flex',flexDirection:'column', flex:1, marginTop:'5%' }}>
            <View>
                <View>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)' }}>Biz sizə Cuxie ilə bağlı hər şeydə kömək etmək üçün buradayıq</Text>
                    <View style={{ marginTop: '5%' }}>
                        <View style={{
                            position: 'absolute',
                            top: '30%',
                            left: 10
                        }}>
                            <Search width={25} height={25} />
                        </View>
                        <TextInput
                            onChangeText={setsearch}
                            value={search}
                            placeholder='Axtar'
                            style={{ borderWidth: 0.5, borderRadius: 10, color: 'rgba(94, 94, 98, 1)', textAlign: 'left', paddingLeft: 40, borderColor: 'rgba(94, 94, 98, 1)', padding: '4%' }}
                            placeholderTextColor='rgba(94, 94, 98, 1)'
                        />
                    </View>
                </View>
                <View>
                    <FlatList
                        data={data}
                        renderItem={(item) => renderitem(item)}
                        keyExtractor={(item) => item.id.toString()}

                    />
                </View>
            </View>
            <View style={{marginBottom:'10%'}}>
                <TouchableOpacity>
                    <Text style={{ color: 'rgba(26, 28, 30, 1)', textAlign: 'center' }}>Başqa sualın var? Bizimlə əlaqə saxla</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Body