import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import OtpInputs from 'react-native-otp-inputs';
import { SCREEN_WIDTH } from '../../../Utils/common';

const Body = () => {
    const [number, setnumber] = useState('')
    return (
        <View style={{ width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
            <Text style={{ color: 'rgba(16, 17, 20, 1)' }}>Kod +994********* nömrəli telefona göndərildi</Text>
            <View style={styles.container}>
                <OtpInputs
                    handleChange={(code) => console.log(code)}
                    numberOfInputs={4}
                    autofillFromClipboard={true}
                    inputStyles={styles.input}
                    value={number}
                />
            </View>
        </View>

    )
}
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
export default Body