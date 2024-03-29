// import { View, Text, Animated, Easing, StyleSheet } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import LogoName from '../../assets/imge/Splas-imge/cuxie.svg'
// import Imegecenter from '../../assets/imge/Splas-imge/Mail sent-bro 1.svg'
// import LogoName2 from '../../assets/imge/Splas-imge/bluename.svg'
// import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common'

// const Splas = ({ navigation }: any) => {
//   const [bacround, setbacround] = useState('#FFFFFF')
//   const opacity = useRef(new Animated.Value(0)).current;
//   const widthAnim = useRef(new Animated.Value(0)).current;
//   const heightAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(widthAnim, {
//       toValue: SCREEN_WIDTH,
//       duration: 4000,
//       useNativeDriver: false,
//     }).start();

//     Animated.timing(heightAnim, {
//       toValue: SCREEN_HEIGHT,
//       duration: 4000,
//       useNativeDriver: false,
//     }).start();
//   }, [SCREEN_WIDTH, SCREEN_HEIGHT, widthAnim, heightAnim]);

//   useEffect(() => {
//     setTimeout(() => {
//       // navigation.navigate('OnboardingScreen')
//       setbacround('rgba(0, 80, 155, 1)')
//     }, 7000)

//     setTimeout(() => {
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//         easing: Easing.linear
//       }).start();
//     }, 2000);
//   }, [])

//   return (
//     <Animated.View style={
//       {
//         backgroundColor: '#FFFFFF',
//         flex: 1
//       }
//     }>

//       <View style={{ alignSelf: 'center', flex: 1 }}>
//         <View style={{ alignSelf: 'center' }}>
//           {bacround === '#FFFFFF'
//             ?
//             <Animated.View style={{
//               alignSelf: 'center', opacity, transform: [
//                 {
//                   translateX: opacity.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [0, 0],
//                   }),
//                 },
//               ],
//             }}>
//               <LogoName2 height={300} width={300} />
//             </Animated.View >
//             :
//             <LogoName height={300} width={300} />
//           }
//         </View>
//         <View style={{ alignSelf: 'center' }}>
//           <Animated.View style={{
//             zIndex: -1, alignSelf: "center", width: widthAnim,
//             height: heightAnim,
//             backgroundColor: 'red',
//             position: 'absolute',
         
//           }}>
//           </Animated.View>
//           <Imegecenter width={500} height={400} />
//         </View>
//       </View>
//     </Animated.View>
//   )
// }

// export default Splas























import { View, Text } from 'react-native'
import React from 'react'

const Splas = () => {
  return (
    <View>
      <Text>Splas</Text>
    </View>
  )
}

export default Splas