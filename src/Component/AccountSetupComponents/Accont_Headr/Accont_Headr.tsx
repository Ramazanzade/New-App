import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import LogoName2 from '../../../assets/imge/Accountsetup-imge/cuxie (1).svg'
import Imgecenter from '../../../assets/imge/Accountsetup-imge/Transport 1.svg'
const Accont_Headr = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', }}>
            <View style={{ alignSelf: 'center' }}>
                <LogoName2 width={250} height={100}  />
            </View>
            <View style={{ alignSelf: 'center',}}>
                <Imgecenter />
            </View>
            <Text style={{ color: '#191C21', fontSize: 15, fontWeight: '300', textAlign: 'center', width: SCREEN_WIDTH - 60 , marginTop:'5%', alignSelf:'center'}}>İndi qeydiyyatdan keçin və çatdırılma komandamızın bir üzvü olun. Gəlin birlikdə uğur qazanaq!</Text>
        </View>
    )
}

export default Accont_Headr