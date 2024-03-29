import { View, Text, Animated, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LogoName from '../../assets/imge/Splas-imge/cuxie.svg'
import Imegecenter from '../../assets/imge/Splas-imge/Mail sent-bro 1.svg'
import LogoName2 from '../../assets/imge/Splas-imge/bluename.svg'

const Splas = ({ navigation }: any) => {
  const [bacround, setbacround] = useState('#FFFFFF')
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('OnboardingScreen')
      setbacround('rgba(0, 80, 155, 1)')
    }, 4000)

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
    <View style={{ flex: 1, backgroundColor: bacround }}>
      <View style={{ alignSelf: 'center', flex: 1 }}>
        <View style={{ alignSelf: 'center' }}>
          {bacround === '#FFFFFF'
            ?
            <Animated.View style={{
              alignSelf: 'center', opacity, transform: [
                {
                  translateX: opacity.interpolate({
                    inputRange: [0, 2],
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
        <View style={{ alignSelf: 'center'}}>
          <Imegecenter width={500} height={400} />
        </View>
      </View>
    </View>
  )
}

export default Splas