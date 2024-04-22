import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Iconb from '../../../../assets/imge/Other_edit_Page-imge/Frame (1).svg'
import Icona from '../../../../assets/imge/Other_edit_Page-imge/Frame.svg'
import Right from '../../../../assets/imge/Other_edit_Page-imge/Frame (2).svg'
import { SCREEN_WIDTH } from '../../../../Utils/common'
const Body = ({ navigation }: any) => {
    return (
        <View style={{width:SCREEN_WIDTH-40, alignSelf:'center'}}>
            <TouchableOpacity style={{display:'flex', flexDirection:'row', justifyContent:'space-between',marginVertical:'8%'}} onPress={()=>navigation.navigate('Delivery_area')}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{alignSelf:'center'}}>
                        <Icona width={40} height={40} />
                    </View>
                    <View style={{marginLeft:'5%'}}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize:18 }}>Çatdırılma ərazisi</Text>
                        <Text style={{ color: 'rgba(144, 144, 148, 1)' }}>Bakı-Quba yolu</Text>
                    </View>
                </View>
                <View>
                    <Right width={40} height={40}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{display:'flex', flexDirection:'row', justifyContent:'space-between',}} onPress={()=>navigation.navigate('Delivery_hours')}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{alignSelf:'center'}}>
                        <Iconb width={40} height={40} />
                    </View>
                    <View style={{marginLeft:'5%', alignSelf:'center'}}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', textAlign:'center' , fontSize:18}}>Çatdırılma saatları</Text>
                    </View>
                </View>
                <View>
                    <Right width={40} height={40}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Body