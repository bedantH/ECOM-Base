import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { ProductDetailsPage, ProductListPage, Cart, Checkout, User, } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from "react-native-vector-icons/Feather";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false
        })}
      >
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
                      iconName = focused ? 'home' : 'home'
                    } else if (routeName === "Cart") {
                      iconName = focused ? 'shopping-cart' : 'shopping-cart'
                    } else if (routeName === "User") {
                      iconName = focused ? 'users' : 'users'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                  },
                  headerShown: false,
                  tabBarShowLabel: false,
                  tabBarStyle: {
                    margin: 10,
                    borderRadius: 10,
                    height: 60,
                    marginTop: 0
                  }
                })}

              >
                <Tab.Screen name="Home" component={ProductListPage} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="User" component={User} />
              </Tab.Navigator>
          }
        </Stack.Screen>
        <Stack.Screen name='Checkout' component={Checkout} />
        <Stack.Screen
          options={() => ({
            headerShown: true,
            headerTitle: "Product Details"
          })}
          name='productDetailsPage'
          component={ProductDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}