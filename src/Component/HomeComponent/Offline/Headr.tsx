import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Offline from '../../../assets/imge/Home-imge/Vector 1.svg'
const Headr = () => {
    return (
        <View>
            <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(33, 96, 171, 1)', borderRadius: 50, paddingHorizontal: '2%', paddingVertical: '1.5%' }}>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(253, 251, 255, 1)', borderRadius: 50, padding: 10 }}>
                        <Offline width={30} height={30} />
                    </TouchableOpacity>
                    <View style={{alignSelf:'center', paddingHorizontal:'9%', }}>
                        <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontSize:15 }} >Online ol</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Headr