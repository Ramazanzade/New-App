import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import CheckBox from '@react-native-community/checkbox';

const data = [
    { id: 1, text: 'Bakı daxili' },
    { id: 2, text: 'Bakı-Quba' },
    { id: 3, text: 'Ələt-Astara' },
    { id: 4, text: 'Bakı-Şamaxı-Yevlax' },
    { id: 5, text: 'Yevlax-Zaqatala' },
]
const Territory_Modal = () => {
    const [checkedItems, setCheckedItems] = useState(new Map());

    const handleCheckboxChange = (id: any) => {
        const newCheckedItems = new Map(checkedItems);
        newCheckedItems.set(id, !checkedItems.get(id));
        setCheckedItems(newCheckedItems);
    };
    const renderItem = ({ item }: any) => {
        const isChecked = checkedItems.get(item.id) || false;
        return (
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#101114', fontSize: 15, paddingVertical: '3%' }}>{item.text}</Text>
                <CheckBox value={isChecked} onValueChange={() => handleCheckboxChange(item.id)} tintColors={{ true: 'rgba(0, 80, 155, 1)', false: 'rgba(82, 82, 86, 1)' }}
                     />
            </View>
        )
    }
    return (
        <View style={{ backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: '#FFFFFF', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
                <View>
                    <Text style={{ color: '#101114', textAlign: 'center', fontSize: 20, marginVertical: '2%' }}>Çatdırılma ərazisi</Text>
                    <View style={{ backgroundColor: '#76777A', width: SCREEN_WIDTH, height: 1 }}></View>
                </View>
                <View style={{ marginTop: '6%', marginBottom: '10%' }}>
                    <FlatList
                        data={data}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}

                    />
                </View>
            </View>
        </View>
    )
}

export default Territory_Modal