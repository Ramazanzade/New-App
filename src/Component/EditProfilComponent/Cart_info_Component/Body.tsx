import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import İmge from '../../../assets/imge/Edit_Profile-imge/credit-card select.svg'
import İmge1 from '../../../assets/imge/Edit_Profile-imge/credit-card select (1).svg'
import İmge2 from '../../../assets/imge/Edit_Profile-imge/credit-card select (2).svg'
import İmge3 from '../../../assets/imge/Edit_Profile-imge/credit-card (1).svg'
import Cart1 from '../../../assets/imge/Edit_Profile-imge/Credit card mockup.svg'
import Cart2 from '../../../assets/imge/Edit_Profile-imge/Frame 70.svg'
import Iconaddnew from '../../../assets/imge/Edit_Profile-imge/Group 1.svg'
const data = [
    { id: 1, imge: 'imge1', cart1: 'cart2', cart2: 'cart1', },
    { id: 2, imge: 'imge2', cart1: 'cart1', cart2: 'cart1' },
    { id: 3, imge: 'imge3', cart1: 'cart2', cart2: 'cart2' },
    { id: 4, imge: 'imge4', cart1: 'cart1', cart2: 'cart1', },

]
const Body = ({ navigation }: any) => {
    const icons = {
        imge1: İmge,
        imge2: İmge3,
        imge3: İmge1,
        imge4: İmge2,
    };
    const cart = {
        cart1: Cart1,
        cart2: Cart2,
    };
    type Item = {
        imge: string;
        cart1: string;
        cart2: string;
        id: number
    };
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const renderitem = ({ item }: { item: Item }) => {
        const Imgeicon = icons[item.imge as keyof typeof icons];
        return (
            <View style={{}}>
                <TouchableOpacity onPress={() => setSelectedId(item.id)} style={{ marginRight: 15 }}>
                    <Imgeicon width={80} height={80} />
                </TouchableOpacity>
            </View>
        )
    }
    const renderitem1 = ({ item }: { item: Item }) => {
        if (selectedId !== item.id) return null;

        const CartIcon = cart[item.cart1 as keyof typeof cart];
        const CartIcon1 = cart[item.cart2 as keyof typeof cart];
        return (
            <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                <TouchableOpacity onPress={() => setSelectedId(null)} style={{ marginRight: 20 }}>
                    <CartIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedId(null)}>
                    <CartIcon1 />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%' }}>
            <View>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400', fontSize: 17 }}>Ödəniş üsulunuzu seçin</Text>
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={(item: any) => renderitem(item)}
                    keyExtractor={(item) => item.id.toString()}
                />
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400', fontSize: 17, marginVertical: '3%' }}>Saxlanılmış kartlarınız</Text>
                <View style={{}}>
                    <FlatList
                        horizontal={true}
                        data={data}
                        renderItem={(item: any) => renderitem1(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', marginTop:'5%' }} onPress={()=>navigation.navigate('Add_NewCart')} >
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize:17, fontWeight:'400' }}>Kart əlavə et</Text>
                <View style={{alignSelf:'center', marginLeft:'3%'}}>
                    <Iconaddnew />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Body