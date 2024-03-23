import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Offline from '../../../assets/imge/Home-imge/Vector 1.svg';
import { Switch } from 'react-native-switch';
import Online from '../../../assets/imge/Home-imge/Vecstor 1.svg'
import Menu from '../../../assets/imge/Home-imge/alt.svg'
import { SCREEN_WIDTH } from '../../../Utils/common';
const Home_Headr = () => {
    const [switchValue, setSwitchValue] = useState(false);

    const toggleSwitch = (value: any) => {
        setSwitchValue(value);
        console.log(value);
    };
    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: '10%', justifyContent: 'space-between' }}>
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={{ width: 53, height: 53, backgroundColor: '#FDFBFF', borderRadius: 55, alignSelf: 'center', alignItems: "center", paddingTop: '19%' }}>
                    <Menu width={30} height={30} />
                </TouchableOpacity>
            </View>
            <View>
                <Switch
                    value={switchValue}
                    onValueChange={toggleSwitch}
                    disabled={false}
                    activeText={'Offline ol'}
                    inActiveText={'Online ol'}
                    circleSize={32}
                    barHeight={60}
                    circleBorderWidth={0}
                    backgroundActive={'#A8C8FF'}
                    backgroundInactive={'#1F5EAA'}
                    circleActiveColor={'#FDFBFF'}
                    circleInActiveColor={'#FDFBFF'}
                    switchWidthMultiplier={6.2}
                    activeTextStyle={{ fontSize: 19, color: '#1F5EAA' }}
                    inactiveTextStyle={{ fontSize: 19 }}
                    innerCircleStyle={{ margin: '5%', height: 52, width: 52, borderRadius: 50 }}
                    renderInsideCircle={() => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {switchValue ? <Online width={25} height={25} /> : <Offline width={25} height={25} />}
                        </View>
                    )}
                />
            </View>
            <View style={{ alignSelf: 'center' }}>
                {/* <TouchableOpacity style={{ width: 53, height: 53, backgroundColor: '#FDFBFF', borderRadius: 55, alignSelf: 'center', alignItems: "center", paddingTop: '19%' }}>
                    <Menu width={30} height={30} />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Home_Headr