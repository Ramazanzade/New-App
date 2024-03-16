import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Body = () => {
    const [number, setnumber] = useState('')

    return (
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
    )

}

export default Body