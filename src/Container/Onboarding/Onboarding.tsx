import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
import LottieView from 'lottie-react-native';
import LoadingPage from '../../Contance/Loading-Page/LoadingPage';
import Svg2 from '../../assets/imge/Onboarding-imge/Contact us 1.svg'
import Svg1 from '../../assets/imge/Onboarding-imge/delivering.svg'
import LinearGradient from 'react-native-linear-gradient';
const images = [
  { id: 1, uri: 'Svg1', title: 'Cuxie ilə daha çox qazanın', text: 'Birbaşa istehsalçılardan alıcılara məhsul çatdırması edərək, həm tədarük zəncirini sadələşdirin, həm də daha çox qazanın.' },
  { id: 2, uri: 'Svg2', title: 'Cuxie ilə 7/24 Dəstək', text: 'İş saatlarında köməyə ehtiyacınız var? Dəstək komandamız hər hansı problem və ya narahatlığınızla bağlı sizə kömək etmək üçün 24/7 hazırdır.', },
];

const icons = {
  Svg1: Svg1,
  Svg2: Svg2,
};
type Item = {
  uri: 'Svg1' | 'Svg2';
  title: string;
  text: string;
};
const Slide = ({ item }: { item: Item }) => {
  const Icon = icons[item.uri];
  return (
    <View style={{ alignItems: 'center', width: SCREEN_WIDTH }}>
      <Text style={{ width: SCREEN_WIDTH - 60, textAlign: 'center', color: '#191C21', fontSize: 23, marginVertical: '5%', fontWeight: '300' }}>{item?.title}</Text>
      <Icon width={350} height={350} />
      <Text style={{ width: SCREEN_WIDTH - 40, textAlign: 'center', color: '#191C21', fontSize: 20, marginTop: '9%', fontWeight: '300' }}>{item?.text}</Text>
    </View>
  );
};

const Onboarding = ({ navigation }: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loading, setloading] = useState(false);
  const ref = useRef<any>();
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SCREEN_WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== images.length) {
      const offset = nextSlideIndex * SCREEN_WIDTH;
      ref.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goaccountpage = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigation.navigate('AccountSetupScreen')
    }, 3000);

  }
  const Footer = () => {
    return (
      <View style={{ alignSelf: 'center', width: SCREEN_WIDTH - 60, }}>
        <View>
          {currentSlideIndex === images.length - 1 ? (
            <View style={{ height: 60, }}>
              <TouchableOpacity
                onPress={() => goaccountpage()}
                style={{ flex: 1, height: 50, }}
              >
                <Text style={{ fontSize: 17, color: '#4078C5', alignSelf: 'flex-end' }}>Növbəti</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ height: 60 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={{ flex: 1, height: 50, alignSelf: 'flex-end' }}>

                <Text style={{ fontSize: 17, color: '#4078C5', alignSelf: 'flex-end' }}>Növbəti</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent:'center' }}>
      <View style={{height:SCREEN_HEIGHT/1.2}}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={images}
          pagingEnabled
          renderItem={({ item }: any) => <Slide item={item} />}
          style={{ }}

        />
      </View>
      <View style={{  }}>
        <Footer />
      </View>
    </View>
  );
};

export default Onboarding;
