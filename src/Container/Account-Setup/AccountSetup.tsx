import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import Accont_Headr from '../../Component/AccountSetupComponents/Accont_Headr/Accont_Headr';
import Accses_Button from '../../Component/AccountSetupComponents/Accses_Button/Accses_Button';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
const AccountSetup = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between' }}>
            <View style={{marginTop:'5%'}}>
                <Accont_Headr />
            </View>
            <View style={{ marginBottom: '10%' }}>
                <Accses_Button navigation={navigation} />
            </View>
        </View>
    );
};

export default AccountSetup;
