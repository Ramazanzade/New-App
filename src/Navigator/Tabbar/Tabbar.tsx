import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimeScreen1 from '../../assets/imge/Tabbar-imge/Icon.svg';
import HomeScreen1 from '../../assets/imge/Tabbar-imge/state-layer.svg';
import NotificationScreen1 from '../../assets/imge/Tabbar-imge/Icon (1).svg';
import ChatScreen1 from '../../assets/imge/Tabbar-imge/Vector.svg'
import HomeScreen from '../Stcak/HomeStack/HomeScreen';
import TimeScreen from '../Stcak/TimeStack/TimeScreen';
import NotificationScreen from '../Stcak/NotificationStack/NotificationScreen';
import ChatScreen from '../Stcak/ChatStack/ChatScreen';
import H1 from '../../assets/imge/Tabbar-imge/4.svg'
import C1 from '../../assets/imge/Tabbar-imge/1.svg'
import N1 from '../../assets/imge/Tabbar-imge/2.svg'
import T1 from '../../assets/imge/Tabbar-imge/3.svg'

const Tab = createBottomTabNavigator();


const Tabbar = ({navigation}:any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route}: any) => ({
        headerShown: false,
        // tabBarActiveTintColor:'red',
        tabBarStyle: {
          height: 50,
          shadowOffset: {
            width: 0,
            height: 30,
            
          },
        },
        tabBarIcon: ({ color, size, focused }: any) => {
          let IconComponent: any;

          if (route.name === 'HomeScreen') {
            IconComponent = focused ? HomeScreen1 : H1;
          } else if (route.name === 'TimeScreen') {
            IconComponent = focused ? T1 : TimeScreen1;
          } else if (route.name === 'NotificationScreen') {
            IconComponent = focused ? N1 : NotificationScreen1;
          } else if (route.name === 'ChatScreen') {
            IconComponent = focused ? C1 : ChatScreen1  ;
          }

          return <IconComponent color={focused ? "green" : "red"} size={35} />;
        },
        tabBarShowLabel: false,      
        
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen}  />
      <Tab.Screen name="TimeScreen" component={TimeScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default Tabbar;