import { View, Text, TouchableOpacity, Switch, Modal } from 'react-native'
import React, { useState } from 'react'
import Right from '../../../assets/imge/Register-imge/Trailing icon.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Vehicle_Modal from '../../../Modal/DriverinformationModal/Vehicle_Modal'
import Territory_Modal from '../../../Modal/DriverinformationModal/Territory_Modal'
const Body = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [modal, setmodal] = useState(false)
    return (
        <View style={{ marginTop: '5%' }}>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '4%' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10 }} onPress={() => setmodal(true)}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', padding: '3%', fontSize: 17 }}>Çatdırılma vasitəsinin növü</Text>
                    <View style={{ alignSelf: 'center', marginRight: '3%' }}>
                        <Right width={26} height={26} />
                    </View>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                            setmodal(false);
                        }}
                    >
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => setmodal(false)} 
                        >
                            <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)',zIndex:2 }} />
                        </TouchableOpacity>
                        <Vehicle_Modal />
                    </Modal>
                </TouchableOpacity>
            </View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '4%' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10 }} onPress={() => setmodal(true)}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', padding: '3%', fontSize: 17 }}>Çatdırılma ərazisi</Text>
                    <View style={{ alignSelf: 'center', marginRight: '3%' }}>
                        <Right width={26} height={26} />
                    </View>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modal}
                    >
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => setmodal(false)} 
                        >
                            <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)',zIndex:2 }} />
                        </TouchableOpacity>
                        <Territory_Modal/>
                    </Modal>
                </TouchableOpacity>
            </View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '4%' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10 }}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', padding: '3%', fontSize: 17 }}>Sifariş qəbul saatları</Text>
                    <View style={{ alignSelf: 'center', marginRight: '3%' }}>
                        <Right width={26} height={26} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', marginTop: '4%' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'rgba(17, 17, 19, 0.2)', borderRadius: 10 }}>
                    <Text style={{ color: 'rgba(16, 17, 20, 1)', padding: '3%', fontSize: 17 }}>İş günləri</Text>
                    <View style={{ alignSelf: 'center', marginRight: '3%' }}>
                        <Right width={26} height={26} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 60, alignSelf: 'center', marginTop: '10%' }}>
                <Text style={{ color: 'rgba(16, 17, 20, 1)', fontSize: 15, width: '90%' }}>Çatdırılma kimi əvvəl təcrübəniz olub?</Text>
                <Switch
                    trackColor={{ false: 'rgba(17, 17, 19, 0.2)', true: '#ECF1FF' }}
                    thumbColor={isEnabled ? 'rgba(64, 120, 197, 1)' : '#f4f3f4'}
                    ios_backgroundColor="rgba(17, 17, 19, 0.2)"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.3 }] }}
                />
            </View>
        </View>
    )
}

export default Body