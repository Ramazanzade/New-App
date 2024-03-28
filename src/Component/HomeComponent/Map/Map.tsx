import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
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

    const getCurrentLocation = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message: "This app needs access to your location.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
    
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
                (position:any) => {
                    const { latitude, longitude } = position.coords;
                    setRegion({
                        ...region,
                        latitude,
                        longitude,
                    });
                },
                (error:any) => console.log(error),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        } else {
            console.log("Location permission denied");
        }
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
            <View style={{ backgroundColor: '#FFF', position: "absolute", top: '20%', right: "5%", borderRadius: 50, alignSelf: 'flex-end', padding: '1%' }}>
                <TouchableOpacity onPress={zoomIn} style={{}}>
                    <Text style={{ fontSize: 20, color: 'rgba(82, 82, 86, 1)', textAlign: 'center' }} > + </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={zoomOut}>
                    <Text style={{ fontSize: 25, color: 'rgba(82, 82, 86, 1)', textAlign: 'center' }} > - </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: 'rgba(70, 71, 74, 1)', position: "absolute", top: '32%', right: "5%", borderRadius: 50, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity style={{ alignSelf: 'center', padding: '1.5%' }} onPress={getCurrentLocation}>
                        <Loction width={25} height={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Map