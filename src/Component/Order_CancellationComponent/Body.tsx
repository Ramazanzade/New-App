import { View, Text, FlatList, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import { RadioButton } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Successful_modal from '../../Modal/Order_Cancellation_Modal/Successful_modal';
import Unsuccessful_modal from '../../Modal/Order_Cancellation_Modal/Unsuccessful_modal';
const data = [
    { id: 1, text: 'Fermer yerində yoxdur' },
    { id: 2, text: 'Məhsulda problem' },
    { id: 3, text: 'Fermer problem yaradır' },
    { id: 4, text: 'İşçi yoxdur' },
    { id: 5, text: 'Digər' },

]
const Body = ({ navigation }: any) => {
    const [checked, setChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState(false);
    const [info, setinfo] = useState('')
    const [modals, setmodals] = useState(false)
    const [modalus, setmodalus] = useState(false)
    const handlePress = (id: any) => {
        setChecked(id);
    };
    const handleCheckboxChange = () => {
        setCheckedItems(!checkedItems)
    }

    const handlesave = () => {
        setmodals(true)
        setTimeout(() => {
            navigation.navigate('Tabbar',{screen:'HomeScreen'})
        }, 3000);
    }
    const close = () => {
        setmodals(false)
    }
    const closeus = () => {
        setmodalus(false)
    }
    const renderItem = ({ item }: any) => {

        return (
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#101114', fontSize: 11, paddingVertical: '3%' }}>{item.text}</Text>
                <RadioButton
                    value={item.id}
                    status={checked === item.id ? 'checked' : 'unchecked'}
                    onPress={() => handlePress(item.id)}
                    color='rgba(64, 120, 197, 1)'
                />
            </View>
        )
    }
    return (
        <View style={{ marginTop: '6%', marginBottom: '10%' }}>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}

            />
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <TextInput
                    onChangeText={setinfo}
                    value={info}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(199, 198, 202, 1)',
                        borderRadius: 10,
                        // textAlign: 'left',
                        textAlignVertical: 'top',
                        color: 'rgba(70, 71, 74, 1)',
                        height: 120,
                        fontSize: 11,
                        padding: '5%'
                    }}
                    placeholder='Öz səbəbini yaz'
                    placeholderTextColor={'rgba(70, 71, 74, 1)'}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 40, alignSelf: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '300', width: '85%', fontSize: 11 }}>Fermerlə bağlı problemdə fermerdən şikayətçi olmaq istəyirsiniz?</Text>
                <CheckBox value={checkedItems} onValueChange={handleCheckboxChange} tintColors={{ true: 'rgba(0, 80, 155, 1)', false: 'rgba(82, 82, 86, 1)' }}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: SCREEN_WIDTH - 40, alignSelf: 'center', justifyContent: 'space-around', marginTop: '10%' }}>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(0, 80, 155, 1)', padding: '3%', borderRadius: 5, width: '40%' }} onPress={() => handlesave()}>
                    <Text style={{ color: 'rgba(0, 80, 155, 1)', textAlign: 'center', fontWeight: '500' }}>Geri dön</Text>
                </TouchableOpacity>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modals}
                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'center' }} >
                        <Successful_modal close={close} />
                    </View>
                </Modal>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0, 80, 155, 1)', padding: '3%', borderRadius: 5, width: '40%' }} onPress={() => setmodalus(true)}>
                    <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontWeight: '500' }}>Ləğv et</Text>
                </TouchableOpacity>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalus}
                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'center' }} >
                        <Unsuccessful_modal closeus={closeus} />
                    </View>
                </Modal>
            </View>
        </View>
    )
}


export default Body