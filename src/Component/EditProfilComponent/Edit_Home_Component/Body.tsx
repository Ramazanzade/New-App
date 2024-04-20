import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon_1 from '../../../assets/imge/Edit_Profile-imge/Frame (1).svg'
import Icon_2 from '../../../assets/imge/Edit_Profile-imge/Frame (2).svg'
import Icon_3 from '../../../assets/imge/Edit_Profile-imge/Frame (3).svg'
import Icon_4 from '../../../assets/imge/Edit_Profile-imge/Frame (4).svg'
import Icon_5 from '../../../assets/imge/Edit_Profile-imge/Frame (5).svg'
import Icon_6 from '../../../assets/imge/Edit_Profile-imge/Frame (6).svg'
import Icon_7 from '../../../assets/imge/Edit_Profile-imge/Frame (7).svg'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Body = ({ navigation }: any) => {
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop:'5%' }} >
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon_1 width={40} height={40} />
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400',fontSize:17 }}>Çatdırılma vasitəsi</Text>
                        <Text style={{ color: 'rgba(144, 144, 148, 1)', fontSize: 10 }}>12ZM356  - Lexus Ct 200h 2011</Text>
                    </View>
                </View>
                <View>
                    <Icon_7 width={45} height={45} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical:'5%'}}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon_2 width={40} height={40} />
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400',fontSize:17 }}>Haqqımda</Text>
                    </View>
                </View>
                <View>
                    <Icon_7 width={45} height={45} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon_3 width={40} height={40} />
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400',fontSize:17 }}>Sürücü portalı</Text>
                    </View>
                </View>
                <View>
                    <Icon_7 width={45} height={45} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical:'5%'}}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon_4 width={40} height={40} />
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400',fontSize:17 }}>Kart məlumatları</Text>
                    </View>
                </View>
                <View>
                    <Icon_7 width={45} height={45} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon_5 width={40} height={40} />
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontWeight: '400',fontSize:17 }}>Məhsul seçimləri</Text>
                    </View>
                </View>
                <View>
                    <Icon_7 width={45} height={45} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical:'5%' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon_6 width={40} height={40} />
                    <View style={{ marginHorizontal: '5%' }}>
                        <Text style={{ color: 'rgba(222, 55, 48, 1)', fontWeight: '400',fontSize:17 }}>Çıxış et</Text>
                    </View>
                </View>
                <View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Body