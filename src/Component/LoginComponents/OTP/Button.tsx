import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Button = ({navigation}:any) => {
    // Bura limit qoy 
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'rgba(0, 80, 155, 1)', borderRadius: 10 }} onPress={() => navigation.navigate('Tabbar',{screen:'HomeScreen'})}>
                <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontSize: 17, padding: '3%' }}>Daxil ol</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button


// import React, { useState } from 'react';
// import { Animated, TouchableOpacity, Text } from 'react-native';

// const FadeOutButton = ({ navigation }) => {
//   const fadeAnim = useState(new Animated.Value(1))[0]; // Initial opacity is 1

//   const fadeOut = () => {
//     // Start the fade out animation
//     Animated.timing(fadeAnim, {
//       toValue: 0, // Fade to opacity 0
//       duration: 500, // Duration of the animation
//       useNativeDriver: true,
//     }).start(() => {
//       // After the animation is done, navigate to the HomeScreen
//       navigation.navigate('Tabbar', { screen: 'HomeScreen' });
//     });
//   };

//   return (
//     <TouchableOpacity onPress={fadeOut}>
//       <Animated.View style={{ opacity: fadeAnim, backgroundColor: 'rgba(0, 80, 155, 1)', borderRadius: 10 }}>
//         <Text style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', fontSize: 17, padding: '3%' }}>
//           Daxil ol
//         </Text>
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// export default FadeOutButton;
