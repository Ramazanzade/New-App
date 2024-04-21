import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { SCREEN_WIDTH } from '../../../Utils/common';

const data = [
    { id: 1, text: 'Meyvələr' },
    { id: 2, text: 'Tərəvəzlər' },
    { id: 3, text: 'Göyərti' },
    { id: 4, text: 'Un və un məhsulları' },
    { id: 5, text: 'Donmuş məhsullar' },
    { id: 6, text: 'Ət və ət məhsulları' },
    { id: 7, text: 'Dəniz məhsulları' },
    { id: 8, text: 'Süd və süd məhsulları, yumurta' },
    { id: 9, text: 'Maye' },
    { id: 10, text: 'Konservləşdirilmiş məhsullar' },
    { id: 11, text: 'Çərəz və digərləri' },

]
const Body = ({ navigation }: any) => {
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
        <View style={{marginTop:'5%'}} >
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}

            />
        </View>
    )
}

export default Body