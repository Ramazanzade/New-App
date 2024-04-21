import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Body = () => {
    const [carvehicle, setcarvehicle] = useState('')
    const [carname, setcarname] = useState('')
    const [carnumber, setcarnmber] = useState('')

    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop:'5%' }}>
            <View>
                <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '400', fontSize: 15 }}>Çatdırılma vasitəsi</Text>
                <TextInput
                    onChangeText={setcarvehicle}
                    value={carvehicle}
                    placeholder='Tır'
                    style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, paddingLeft: '5%', textAlign: 'left', padding: '4%', marginTop: '3%', color:'rgba(17, 17, 19, 0.6)' }}
                    placeholderTextColor='rgba(17, 17, 19, 0.6)'
                />
            </View>
            <View style={{marginVertical:'5%'}}>
                <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '400', fontSize: 15 }}>Maşının adı</Text>
                <TextInput
                    onChangeText={setcarname}
                    value={carname}
                    placeholder='Maşının adı'
                    style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, paddingLeft: '5%', textAlign: 'left', padding: '4%', marginTop: '3%' , color:'rgba(17, 17, 19, 0.6)'}}
                    placeholderTextColor='rgba(17, 17, 19, 0.6)'
                />
            </View>
            <View>
                <Text style={{ color: 'rgba(37, 38, 41, 1)', fontWeight: '400', fontSize: 15 }}>Maşının nömrəsi</Text>
                <TextInput
                    onChangeText={setcarnmber}
                    value={carnumber}
                    placeholder='12ZM356'
                    style={{ borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10, paddingLeft: '5%', textAlign: 'left', padding: '4%', marginTop: '3%', color:'rgba(17, 17, 19, 0.6)' }}
                    placeholderTextColor='rgba(17, 17, 19, 0.6)'
                />
            </View>

        </View>
    )
}

export default Body