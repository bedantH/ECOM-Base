import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { PDP, PLP, Cart, Checkout, User } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='App'>
          {
            () =>
              <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === "Home") {
                      iconName = focused ? 'home' : 'home-outline'
                    } else if (routeName === "Cart") {
                      iconName = focused ? 'cart' : 'cart-outline'
                    } else if (routeName === "User") {
                      iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                  },
                  headerShown: false,
                  tabBarShowLabel: false
                })}

              >
                <Tab.Screen name="Home" component={PLP} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="User" component={User} />
              </Tab.Navigator>
          }
        </Stack.Screen>
        <Stack.Screen name='Checkout' component={Checkout} />
        <Stack.Screen name='PDP' component={PDP} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}