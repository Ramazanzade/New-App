import { View, Animated, Easing, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import LogoName from '../../assets/imge/Splas-imge/cuxie.svg';
import Imegecenter from '../../assets/imge/Splas-imge/Mail sent-bro 1.svg';
import LogoName2 from '../../assets/imge/Splas-imge/bluename.svg';

const window = Dimensions.get('window');

const Splas = ({ navigation }: any) => {
  const [background, setBackground] = useState<any>(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(background, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, 3000);
    setTimeout(() => {
      navigation.navigate('OnboardingScreen')
    }, 5000);
  }, []);

  const backgroundColor = background.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', 'rgba(0, 80, 155, 1)'],
  });

  return (
    <Animated.View style={{ backgroundColor, flex: 1 }}>
      <View style={{ alignSelf: 'center', flex: 1 }}>
        <View style={{ alignSelf: 'center' }}>
          {background === '#FFFFFF' ? (
            <LogoName2 height={300} width={300} />
          ) : (
            <LogoName height={300} width={300} />
          )}
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Imegecenter width={500} height={400} />
        </View>
      </View>
    </Animated.View>
  );
};

export default Splas;
