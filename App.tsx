import React from 'react';
import { View } from 'react-native';
import {
  NavigationContainer, DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import SplashScreen from './src/screen/splashScreen';
import LoginScreen from './src/screen/loginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1, }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splashScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splashScreen" component={SplashScreen} />
          <Stack.Screen name="loginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
