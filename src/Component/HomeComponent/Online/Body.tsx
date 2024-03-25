import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import AcceptView from './AcceptView/AcceptView'
import EnoughView from './EnoughView/EnoughView'

const Body = () => {
    const [buttoncolor, setbuttoncolor] = useState(false)
    const handle = () => {
        setbuttoncolor(!buttoncolor)
    }
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            {buttoncolor
                ?
                (
                    <EnoughView/>
                )
                :
                (
                    <AcceptView/>
                )
            }
            <TouchableOpacity style={{ backgroundColor: buttoncolor ? 'rgba(114, 119, 130, 1)' : 'rgba(0, 80, 155, 1)', borderRadius: 10, marginBottom: '3%' }} onPress={handle}>
                {buttoncolor
                    ?
                    (
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 15, textAlign: 'center', padding: '2%', }}>Çatdı</Text>
                    )
                    :
                    (
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 15, textAlign: 'center', padding: '2%', }}>Qəbul et</Text>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

export default Body