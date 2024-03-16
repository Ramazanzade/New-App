import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Upload from '../../../assets/imge/Register-imge/document-upload.svg'
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import ID_cards from './ID cards/ID_cards';
import Driverslicense from '../../../Container/Register/Driverslicense/Driverslicense';
import Driving_license from './Driving license/Driving_license';
import Permission_slip from './Permission slip/Permission_slip';
import Release_form from './Release form/Release_form';
import TexPassport_car from './TexPassport car/TexPassport_car';
import Profile_picture from './Profile picture/Profile_picture';

const Body = () => {
    return (
        <ScrollView style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' , marginBottom:'10%'}}>
            <ID_cards />
            <Driving_license />
            <Permission_slip/>
            <Release_form/>
            <TexPassport_car/>
            <Profile_picture/>
        </ScrollView>
    )
}

export default Body;
