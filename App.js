import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './Components/LandingPage';
import GetStarted from './Components/GetStarted';
import FirstSlide from './Components/FirstSlide';
import SecondSlide from './Components/SecondSlide';
import ThirdSlide from './Components/ThirdSlide';
import OnboardEnd from './Components/OnboardEnd';
import Portfolio from './Components/Portfolio';
import AddAsset from './Components/AddAsset';
import AssetValue from './Components/AssetValue';
import CoinDetails from './Components/CoinDetails';
import ExchangeStart from './Components/ExchangeStart';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="FirstSlide" component={FirstSlide} />
          <Stack.Screen name="SecondSlide" component={SecondSlide} />
          <Stack.Screen name="ThirdSlide" component={ThirdSlide} />
          <Stack.Screen name="OnboardEnd" component={OnboardEnd} />
          <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="AddAsset" component={AddAsset} />
          <Stack.Screen name="AssetValue" component={AssetValue} />
          <Stack.Screen name="CoinDetails" component={CoinDetails} />
          <Stack.Screen name="ExchangeStart" component={ExchangeStart} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <SafeAreaProvider>
        <SplashScreen></SplashScreen>
      </SafeAreaProvider> */}
    </>
  );
}

