import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import SplasScreen from './src/Navigator/Stcak/SplasStack/SplasScreen';
import OnboardingScreen from './src/Navigator/Stcak/OnboardingStack/OnboardingScreen';
import AccountSetupScreen from './src/Navigator/Stcak/AccountSetupStack/AccountSetupScreen';
import LoginScreen from './src/Navigator/Stcak/LoginStack/LoginScreen';
import RegisterScreen from './src/Navigator/Stcak/RegisterStack/RegisterScreen';
import ApplyScreen from './src/Navigator/Stcak/ApplyStack/ApplyScreen'
import WelcomeScreen from './src/Navigator/Stcak/WelcomeStack/WelcomeScreen'
import Tabbar from './src/Navigator/Tabbar/Tabbar'
import Order_CancellationScreen from './src/Navigator/Stcak/Order_CancellationStack/Order_CancellationScreen'
import { ButtonProvider } from './src/Context/ButtonContext/ButtonContext';
import { StatusProvider } from './src/Context/StatusContext/StatusContext'
import Chat_MessageScreen from './src/Navigator/Stcak/Chat_MessageStack/Chat_MessageScreen'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <StatusProvider>
      <ButtonProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="SplaScreen" component={SplasScreen} />  */}
            {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
            {/* <Stack.Screen name="AccountSetupScreen" component={AccountSetupScreen} /> */}
            {/* <Stack.Screen name="ApplyScreen" component={ApplyScreen} /> */}
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
            {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
            {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
            {/* <Stack.Screen name="Tabbar" component={Tabbar} /> */}
            {/* <Stack.Screen name="Order_CancellationScreen" component={Order_CancellationScreen} /> */}
            <Stack.Screen name="Chat_MessageScreen" component={Chat_MessageScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ButtonProvider>
    </StatusProvider>

  );
};
const BigApp = () => {
  return (
    // <Provider store={store} >
    <App />
    // </Provider>
  )
}

export default BigApp;