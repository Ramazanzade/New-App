import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Cartsvg from '../../../assets/imge/Edit_Profile-imge/Credit card mockup.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Scann from '../../../assets/imge/Edit_Profile-imge/23.svg'
// burda gələn svg props ilə gəlib öturuləcək
import DatePicker from 'react-native-date-picker';

const Body = ({ navigation }: any) => {
    const [cartname, setcartname] = useState('')
    const [cartnumber, setcartnumber] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [birth, setbirth] = useState<any>('')
    const handleTextInputFocus = () => {
        setOpen(true);
    };
    const [cvv, setcvv] = useState('')
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            <View style={{ alignSelf: 'center' }}>
                <Cartsvg width={400} height={250} />
            </View>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center', marginRight: '3%' }}>
                    <Scann />
                </View>
                <Text style={{ color: 'rgba(0, 80, 155, 1)', fontSize: 17 }}>Kartı skan et</Text>
            </TouchableOpacity>
            <View style={{marginTop:'5%'}}>
                <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', }}>
                    <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 13 }}>Kart sahibinin adı</Text>
                    <TextInput
                        onChangeText={setcartname}
                        value={cartname}
                        placeholder='Kart sahibinin adı'
                        style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, textAlign: 'left', paddingLeft: 15, fontSize: 13, padding: '4%', color: 'rgba(37, 38, 41, 1)' }}
                        placeholderTextColor='rgba(17, 17, 19, 0.6)'
                    />
                </View>
                <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center',marginVertical:'3%' }}>
                    <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 13 }}>Kart nömrəsi</Text>
                    <TextInput
                        onChangeText={setcartnumber}
                        value={cartnumber}
                        placeholder='Kart nömrəsi'
                        style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, textAlign: 'left', paddingLeft: 15, fontSize: 13, padding: '4%', color: 'rgba(37, 38, 41, 1)' }}
                        placeholderTextColor='rgba(17, 17, 19, 0.6)'
                        keyboardType='numeric'
                    />
                </View>
                <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    <View style={{}}>
                        <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 13 }}>İstifadə müddəti</Text>
                        <TextInput
                            onFocus={handleTextInputFocus}
                            onChangeText={setbirth}
                            value={birth}
                            placeholder='DD/MM/YYYY'
                            style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, textAlign: 'left', paddingLeft: 15, fontSize: 13, padding: '4%', color: 'rgba(37, 38, 41, 1)', paddingHorizontal:'20%' }}
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
                    <View style={{}}>
                        <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '500', padding: 5, fontSize: 13 }}>CVV</Text>
                        <TextInput
                            onChangeText={setcvv}
                            value={cvv}
                            placeholder='Cvv'
                            style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, textAlign: 'left', paddingLeft: 15, fontSize: 13, padding: '4%', color: 'rgba(37, 38, 41, 1)' , paddingHorizontal:'30%'}}
                            placeholderTextColor='rgba(17, 17, 19, 0.6)'
                            keyboardType='numeric'
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Body