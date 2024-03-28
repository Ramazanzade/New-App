import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Offline_index from '../../Component/HomeComponent/Offline/Offline_index';
import Home_Headr from '../../Component/HomeComponent/Home_Headr/Home_Headr';
import { SCREEN_WIDTH } from '../../Utils/common';
import Map from '../../Component/HomeComponent/Map/Map';

const Home = ({navigation}:any) => {


    return (
        <View style={{ flex: 1 }}>
            <View style={{flex:1}}>
                <Map />
            </View>
            <View style={{position:'absolute', height:'100%'}}>
                <Home_Headr navigation={navigation}/>
            </View>
        </View >
    );
};

export default Home;
