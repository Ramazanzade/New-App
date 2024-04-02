import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimeScreen from '../../Navigator/Stcak/TimeStack/TimeScreen';
import TimerTab_bar from '../../Navigator/Tabbar/TimerTab_bar/TimerTab_bar';
const Stack = createNativeStackNavigator();
const Time = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
      <Text style={{color:'rgba(16, 17, 20, 1)', width:SCREEN_WIDTH-40, alignSelf:'center', marginTop:'3%', fontSize:17}}>Gedişlər</Text>
      <View style={{height:0.5, backgroundColor:'rgba(66, 71, 81, 1)', marginTop:'2%'}}></View>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TimerTab_bar" component={TimerTab_bar} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default Time