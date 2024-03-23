import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { SCREEN_WIDTH } from '../../../Utils/common';
import Loction from '../../../assets/imge/Home-imge/Path.svg'
const Map = () => {
    const initialRegion = {
        latitude: 37.,
        longitude: -122,
        latitudeDelta: 0.1,
        longitudeDelta: 0.2,
    };

    const [region, setRegion] = useState(initialRegion);

    const zoomIn = () => {
        setRegion(prevRegion => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta / 2,
            longitudeDelta: prevRegion.longitudeDelta / 2,
        }));
    };

    const zoomOut = () => {
        setRegion(prevRegion => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta * 2,
            longitudeDelta: prevRegion.longitudeDelta * 2,
        }));
    };
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                region={region}
                onRegionChange={setRegion}
            >
                <Marker
                    coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                    title="Marker"
                    description="This is a marker"
                />
            </MapView>
            <View style={{ backgroundColor: '#FFF', position: "absolute", top: '30%', right: "5%", borderRadius: 50, alignSelf: 'flex-end', padding: '1%' }}>
                <TouchableOpacity onPress={zoomIn} style={{}}>
                    <Text style={{ fontSize: 30, color: 'rgba(82, 82, 86, 1)', textAlign: 'center' }} > + </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={zoomOut}>
                    <Text style={{ fontSize: 35, color: 'rgba(82, 82, 86, 1)', textAlign: 'center' }} > - </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'rgba(70, 71, 74, 1)', position: "absolute", top: '50%', right: "5%", borderRadius: 50, alignSelf: 'flex-end',  justifyContent: 'center', // Center content vertically
    alignItems: 'center', }}>
                <View style={{alignItems:'center',}}>
                    <TouchableOpacity onPress={zoomIn} style={{ alignSelf: 'center', padding: '1.5%' }}>
                        <Loction width={35} height={35} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Map