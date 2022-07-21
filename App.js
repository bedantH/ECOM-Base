import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {PDP, PLP } from "./screens";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='pdp'>
        <Stack.Screen name="pdp" component={PDP} />
        <Stack.Screen name="plp" component={PLP} />
      </Stack.Navigator>
    </NavigationContainer>
    // comment
  );
}