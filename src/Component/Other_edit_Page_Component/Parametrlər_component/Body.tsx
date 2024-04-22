import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import Icon1 from '../../../assets/imge/Other_edit_Page-imge/Icon set.svg'
import Icon2 from '../../../assets/imge/Other_edit_Page-imge/Frame (3).svg'
import Icon3 from '../../../assets/imge/Other_edit_Page-imge/Icon set (1).svg'
import Icon4 from '../../../assets/imge/Other_edit_Page-imge/Frame (1).svg'
import Right from '../../../assets/imge/Other_edit_Page-imge/Frame (2).svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const Body = ({ navigation }: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: '8%' }} onPress={() => navigation.navigate('Delivery_area')}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Icon1 width={35} height={35} />
                    </View>
                    <View style={{ marginLeft: '5%', alignSelf: 'center' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 18 }}>Dil</Text>
                    </View>
                </View>
                <View>
                    <Right width={40} height={40} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }} onPress={() => navigation.navigate('Delivery_hours')}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Icon2 width={35} height={35} />
                    </View>
                    <View style={{ marginLeft: '5%', alignSelf: 'center' }}>
                        <Text style={{ color: 'rgba(16, 17, 20, 1)', textAlign: 'center', fontSize: 18 }}>Naviqator</Text>
                    </View>
                </View>
                <View>
                    <Right width={40} height={40} />
                </View>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '8%' }}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Icon3  width={35} height={35}/>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 15, textAlign:'center', alignSelf:'center',  marginLeft: '5%'}}>Bildirişlər</Text>
                </View>
                <Switch
                    trackColor={{ false: 'rgba(17, 17, 19, 0.2)', true: '#ECF1FF' }}
                    thumbColor={isEnabled ? 'rgba(64, 120, 197, 1)' : '#f4f3f4'}
                    ios_backgroundColor="rgba(17, 17, 19, 0.2)"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.3 }] }}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '8%' }}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Icon4  width={35} height={35}/>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 15, textAlign:'center', alignSelf:'center',  marginLeft: '5%'}}>Yeniləmələr</Text>
                </View>
                <Switch
                    trackColor={{ false: 'rgba(17, 17, 19, 0.2)', true: '#ECF1FF' }}
                    thumbColor={isEnabled1 ? 'rgba(64, 120, 197, 1)' : '#f4f3f4'}
                    ios_backgroundColor="rgba(17, 17, 19, 0.2)"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.3 }] }}
                />
            </View>
        </View>
    )
}
export default Body