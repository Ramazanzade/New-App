import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import AcceptView from './AcceptView/AcceptView'
import EnoughView from './EnoughView/EnoughView'
import {ButtonContext} from '../../../Context/ButtonContext/ButtonContext'
const Body = () => {
    const { button, setButton } = useContext(ButtonContext);
    const handle = () => {
        setButton(!button)
    }
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            {button
                ?
                (
                    <EnoughView/>
                )
                :
                (
                    <AcceptView />
                )
            }
            <View style={{marginTop:'2%'}}>
                <TouchableOpacity style={{ backgroundColor: button ? 'rgba(114, 119, 130, 1)' : 'rgba(0, 80, 155, 1)', borderRadius: 10, marginBottom: '3%' }} onPress={handle}>
                    {button
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
        </View>
    )
}

export default Body