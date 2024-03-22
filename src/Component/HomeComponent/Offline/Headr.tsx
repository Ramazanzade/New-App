import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Offline from '../../../assets/imge/Home-imge/Vector 1.svg';
import SwipeButton from 'rn-swipe-button';
import { SCREEN_WIDTH } from '../../../Utils/common';

const Headr = () => {
    const [isOnline, setIsOnline] = useState(false);

    const handleSwipe = () => {
        setIsOnline(!isOnline);
    };

    return (
        <View>
            <View style={{ backgroundColor: '#76777A', width: 40, height: 5, borderRadius: 10, alignSelf: 'center', marginVertical: '2%', marginTop: '3%' }}></View>
            <SwipeButton
                containerStyles={{ borderRadius: 50, alignSelf: "center", width: SCREEN_WIDTH / 1.8 }}
                height={50}
                railBackgroundColor="#4078C5"
                railStyles={{ borderRadius: 50, backgroundColor: '#A8C8FF' }}
                thumbIconStyles={{ borderRadius: 50, width: SCREEN_WIDTH / 1.8 }}
                thumbIconWidth={50}
                title={isOnline ? "Go offline" : "Go online"}
                titleColor='#FFFFFF'
                width={SCREEN_WIDTH / 2}
                thumbIconBackgroundColor='#FFFFFF'
                titleStyles={{}}
                onSwipeSuccess={handleSwipe}
            
            />
        </View>
    );
};

export default Headr;
