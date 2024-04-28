import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Button = ({navigation}:any) => {
    // Bura limit qoy 
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'rgba(0, 80, 155, 1)', borderRadius: 10 }} onPress={() => navigation.navigate('Tabbar',{screen:'HomeScreen'})}>
                <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontSize: 17, padding: '3%' }}>Daxil ol</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button