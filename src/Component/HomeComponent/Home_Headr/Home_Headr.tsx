import React, { useContext, useState } from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import Offline from '../../../assets/imge/Home-imge/Vector 1.svg';
import { Switch } from 'react-native-switch';
import Online from '../../../assets/imge/Home-imge/Vecstor 1.svg'
import Menu from '../../../assets/imge/Home-imge/alt.svg'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Utils/common';
import Offline_index from '../Offline/Offline_index';
import Online_index from '../Online/Online_index';
import X from '../../../assets/imge/Home-imge/x.svg'
import N from '../../../assets/imge/Home-imge/!.svg'
import { ButtonContext } from '../../../Context/ButtonContext/ButtonContext'
import Profile_Modal from '../../../Modal/Profile_Modal/Profile_Modal';
const Home_Headr = ({ navigation }: any) => {
    const [switchValue, setSwitchValue] = useState(false);
    const { button, setButton } = useContext(ButtonContext);
    const toggleSwitch = (value: any) => {
        setSwitchValue(value);
    };
    const [profilemodal, setprofilemodal] = useState(false)
    const touc = () => {
        setprofilemodal(!profilemodal)
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: '10%', justifyContent: 'space-around' }}>
                <View style={{ alignSelf: 'center' }}>
                    <TouchableOpacity style={{ width: 45, height: 45, backgroundColor: '#FDFBFF', borderRadius: 55, alignSelf: 'center', alignItems: "center", paddingTop: '19%' }} onPress={() => setprofilemodal(true)}>
                        <Menu width={25} height={25} />
                    </TouchableOpacity>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={profilemodal}
                    >
                           <TouchableOpacity
                            style={{ flex: 1 , zIndex:-3, position:'absolute'}}
                            onPress={() => setprofilemodal(false)} 
                        >
                            <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)',zIndex:-2 }} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)', justifyContent: 'center' }} >
                            <Profile_Modal />
                        </View>
                    </Modal>
                </View>
                <View>
                    <Switch
                        value={switchValue}
                        onValueChange={toggleSwitch}
                        disabled={false}
                        activeText={'Offline ol'}
                        inActiveText={'Online ol'}
                        circleSize={30}
                        barHeight={60}
                        circleBorderWidth={0}
                        backgroundActive={'#A8C8FF'}
                        backgroundInactive={'#1F5EAA'}
                        circleActiveColor={'#FDFBFF'}
                        circleInActiveColor={'#FDFBFF'}
                        switchWidthMultiplier={6.1}
                        activeTextStyle={{ fontSize: 15, color: '#1F5EAA' }}
                        inactiveTextStyle={{ fontSize: 15 }}
                        innerCircleStyle={{ margin: '5%', height: 45, width: 45, borderRadius: 50 }}
                        renderInsideCircle={() => (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                {switchValue ? <Online width={22} height={22} /> : <Offline width={22} height={22} />}
                            </View>
                        )}
                    />
                </View>
                <View>
                    {
                        switchValue
                            ?
                            <View style={{ alignSelf: 'center' }}>
                                <View style={{ width: 45, height: 45, backgroundColor: '#FDFBFF', borderRadius: 55, alignSelf: 'center', alignItems: "center", paddingTop: '19%' }} >
                                    {button ? (
                                        <TouchableOpacity onPress={() => navigation.navigate('Order_CancellationScreen')}>
                                            <N width={25} height={25} />
                                        </TouchableOpacity>
                                    ) : (
                                        <X width={25} height={25} />
                                    )}
                                </View>
                            </View>
                            :
                            null
                    }
                </View>
            </View>
            <View style={{ width: SCREEN_WIDTH, justifyContent: 'flex-end' }}>
                {switchValue
                    ?
                    <View style={{}}>
                        <Online_index />
                    </View>
                    :
                    <View>
                        <Offline_index />
                    </View>
                }
            </View>
        </View>
    )
}

export default Home_Headr