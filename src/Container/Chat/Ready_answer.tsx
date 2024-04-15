import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import { useRoute } from '@react-navigation/native'

const Ready_answer = ({route}:any) => {
    const  {add}  = route.params;
    console.log(add);
    console.log(add.text);    
    return (
        <View>
            <Text style={{ color: 'rgba(16, 17, 20, 1)', width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '3%', fontSize: 17 }}>Dəstək</Text>
            <View style={{ width: SCREEN_WIDTH, height: 1, backgroundColor: 'rgba(70, 70, 70, 1)', marginTop: '2%' }}></View>
            <View>
                <Text style={{ color: 'red', }}>{add.text}</Text>
                <Text style={{ color: 'red' }}>Salam</Text>
            </View>

        </View>
    )
}

export default Ready_answer