import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Close from '../../assets/imge/Order_Cancellation-imge/close.svg'
import Success from '../../assets/imge/Order_Cancellation-imge/check.svg'
import { SCREEN_WIDTH } from '../../Utils/common'
const Successful_modal = ({close}:any) => {
    return (
        <View style={{backgroundColor:'#FFFFFF', borderRadius:10, width:SCREEN_WIDTH-60, alignSelf:'center'}}>
            <View style={{alignSelf:'flex-end', paddingTop:'5%', paddingRight:'5%'}}>
                <TouchableOpacity onPress={close}>
                    <Close />
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center'}}>
                <Success />
            </View>
            <View style={{alignSelf:'center', marginVertical:'5%', marginBottom:'10%'}}>
                <Text style={{color:'rgba(16, 17, 20, 1)', fontSize:15}}>Sifarişiniz ləğv edildi !</Text>
            </View>
        </View>
    )
}

export default Successful_modal