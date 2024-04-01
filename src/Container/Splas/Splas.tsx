import { View, Text, Animated, Easing, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LogoName from '../../assets/imge/Splas-imge/cuxie.svg'
import Imegecenter from '../../assets/imge/Splas-imge/Mail sent-bro 1.svg'
import LogoName2 from '../../assets/imge/Splas-imge/bluename.svg'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'
const window = Dimensions.get('window');

const Splas = ({ navigation }: any) => {
  const [bacround, setbacround] = useState('#FFFFFF')
  const opacity = useRef(new Animated.Value(0)).current;
  const sizeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(sizeAnim, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [sizeAnim]);

  const sizeStyle = {
    width: sizeAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, window.width / 2, window.width],
    }),
    height: sizeAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, window.width / 2, window.width],
    }),
    borderRadius: sizeAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [window.width / 2, window.width / 2, window.width / 2]
    }),
    backgroundColor: 'green',
  };
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('OnboardingScreen')
      setbacround('rgba(0, 80, 155, 1)')
    }, 7000)

    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.linear
      }).start();
    }, 2000);
  }, [])

  return (
    <Animated.View style={
      {
        backgroundColor: '#FFFFFF',
        flex: 1
      }
    }>
      <View style={{ alignSelf: 'center', flex: 1 }}>
        <View style={{ alignSelf: 'center' }}>
          {bacround === '#FFFFFF'
            ?
            <Animated.View style={{
              alignSelf: 'center', opacity, transform: [
                {
                  translateX: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0],
                  }),
                },
              ],
            }}>
              <LogoName2 height={300} width={300} />
            </Animated.View >
            :
            <LogoName height={300} width={300} />
          }
        </View>
        <View >
          {/* <Animated.View style={[sizeStyle, { position: 'absolute', alignSelf: 'center', flex: 1, alignItems: 'center' }]} /> */}
          <View style={{ alignSelf: 'center' }}>
            <Imegecenter width={500} height={400} />
          </View>
        </View>
      </View>
      <View style={{position:'absolute', justifyContent:'center', alignSelf:'center', zIndex:-2}}>
        <Animated.View style={[sizeStyle, { position: 'absolute', alignSelf: 'center', flex: 1, alignItems: 'center' }]} />

      </View>
    </Animated.View>
  )
}

export default Splas



