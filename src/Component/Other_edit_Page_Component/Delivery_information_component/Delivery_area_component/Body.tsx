import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../../Utils/common'
import CheckBox from '@react-native-community/checkbox';

const data = [
    { id: 1, text: 'Bakı daxili' },
    { id: 2, text: 'Bakı-Quba' },
    { id: 3, text: 'Bakı-Ələt-Qazax' },
    { id: 4, text: 'Bakı-Astara' },
    { id: 5, text: 'Bakı-Şamaxı-Yevlax' },
    { id: 6, text: 'Yevlax-Zaqatala' },
]
const Body = ({navigation}:any) => {
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
        <View style={{ marginTop:'5%'}}>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}

            />
        </View>
    )
}


export default Body