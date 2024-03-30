import React, { useState, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { SCREEN_WIDTH } from '../../../Utils/common';
import { Svg, Circle , Text } from 'react-native-svg';
import Headr from './Headr';
const Body = () => {
    const [number, setNumber] = useState('');
    const [timer, setTimer] = useState(120);
    const strokeWidth = 6;
    const circumference = 2 * Math.PI * 35;
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const strokeDashoffset = circumference - (timer / 120) * circumference;
    return (
        <View style={{ width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
            <Headr/>
            <View style={styles.container}>
                <OtpInputs
                    handleChange={(code) => console.log(code)}
                    numberOfInputs={4}
                    autofillFromClipboard={true}
                    inputStyles={styles.input}
                    value={number}
                />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center',marginTop:'15%'}}>
                <Svg width={100} height={120} viewBox={`0 0 ${90} ${100}`}>
                    <Circle
                        stroke="blue"
                        fill="none"
                        cx={50}
                        cy={50}
                        r={35}
                        strokeWidth={strokeWidth / 2}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    // strokeLinecap={'butt'}
                    />
                    <Text
                        x="45%"
                        y="45%"
                        textAnchor='middle'
                        fill="rgba(16, 17, 20, 1)"
                        dy=".3em" 
                        fontSize={15}
                    >
                        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                    </Text>
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH / 4,
        marginTop: '20%',
    },
    input: {
        width: 70,
        height: 80,
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'rgba(199, 198, 202, 1)',
        color: 'rgba(199, 198, 202, 1)',
        fontSize: 35
    },
});

export default Body;
