import { View, Text } from 'react-native'
import React from 'react'
import Ready_answer_body from '../../Component/ChatComponent/Ready_answer_Component/Ready_answer_body'
import { SCREEN_WIDTH } from '../../Utils/common'

const Ready_answer = () => {
    return (
        <View>
            <Text style={{ color: 'rgba(16, 17, 20, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', fontSize: 17 }}>Dəstək</Text>
            <View style={{ width: SCREEN_WIDTH, height: 1, backgroundColor: 'rgba(70, 70, 70, 1)', marginTop: '2%' }}></View>
            <Ready_answer_body />
        </View>
    )
}

export default Ready_answer