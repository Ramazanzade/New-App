import { View, Text, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import DatePicker from 'react-native-date-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Body = () => {
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')
    const [birth, setbirth] = useState<any>('')
    const [number, setnumber] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const handleTextInputFocus = () => {
        setOpen(true);
    };
    return (
        <View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 15 }}>Ad</Text>
                <TextInput
                    onChangeText={setname}
                    value={name}
                    placeholder='Ad'
                    style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, textAlign: 'left', paddingLeft: 15, fontSize: 15, padding: '4%' }}
                    placeholderTextColor='rgba(17, 17, 19, 0.6)'
                />
            </View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 15 }}>Soyad</Text>
                <TextInput
                    onChangeText={setsurname}
                    value={surname}
                    placeholder='Soyad'
                    style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, textAlign: 'left', paddingLeft: 15, fontSize: 15, padding: '4%' }}
                    placeholderTextColor='rgba(17, 17, 19, 0.6)'
                />
            </View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 15 }}>Doğum tarixi</Text>
                <TextInput
                    onFocus={handleTextInputFocus}
                    onChangeText={setbirth}
                    value={birth}
                    placeholder='DD/MM/YYYY'
                    style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, textAlign: 'left', paddingLeft: 15, fontSize: 15, padding: '4%' , color:'rgba(37, 38, 41, 1)'}}
                    placeholderTextColor='rgba(17, 17, 19, 0.6)'
                    keyboardType='numeric'
                />
                {open && (
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(selectedDate) => {
                            setOpen(false);
                            setDate(selectedDate);
                            setbirth(selectedDate.toLocaleDateString());
                        }}
                        onCancel={() => {
                            setOpen(false);
                        }}
                        mode='date'
                    />
                )}
            </View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '5%' }}>
                <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 15 }}>Telefon nömrəsi</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10 }}>
                    <Text style={{ paddingLeft: 15, fontSize: 15, color: 'rgba(16, 24, 40, 1)' }}>+994</Text>
                    <TextInput
                        onChangeText={setnumber}
                        value={number}
                        placeholder='(555) 000-0000'
                        style={{ flex: 1, textAlign: 'left', fontSize: 15, padding: '4%' }}
                        placeholderTextColor='rgba(17, 17, 19, 0.6)'
                        keyboardType='numeric'
                    />
                </View>
            </View>

        </View>
    )
}

export default Body
