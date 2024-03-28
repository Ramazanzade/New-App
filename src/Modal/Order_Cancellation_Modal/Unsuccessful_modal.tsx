import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Close from '../../assets/imge/Order_Cancellation-imge/close.svg'
import Unsuccess from '../../assets/imge/Order_Cancellation-imge/2.svg'
import { SCREEN_WIDTH } from '../../Utils/common'
const Unsuccessful_modal = ({closeus}:any) => {
    return (
        <View style={{backgroundColor:'#FFFFFF', borderRadius:10, width:SCREEN_WIDTH-60, alignSelf:'center'}}>
            <View style={{alignSelf:'flex-end', paddingTop:'5%', paddingRight:'5%'}}>
                <TouchableOpacity onPress={closeus}>
                    <Close />
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center'}}>
                <Unsuccess />
            </View>
            <View style={{alignSelf:'center', marginVertical:'5%', marginBottom:'10%'}}>
                <Text style={{color:'rgba(16, 17, 20, 1)', fontSize:15, textAlign:'center'}}>Xəta  baş verdi</Text>
                <Text style={{color:'rgba(70, 71, 74, 1)', fontSize:11, textAlign:'center', marginTop:'2%'}}>Təkrar cəhd edin</Text>
            </View>
        </View>
    )
}

export default Unsuccessful_modal