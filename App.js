import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { ProductDetailsPage, ProductListPage, Cart, Checkout, User, Login, } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Ionicons from "react-native-vector-icons/Feather";
import { useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();




export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  async function loadFonts() {
    await Font.loadAsync({
      'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
      'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'DancingScript': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <AuthContext>

        <Stack.Navigator
          screenOptions={() => ({
            headerShown: false
          })}
          initialRouteName={"Login"}
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
                      marginTop: 0,
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
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </AuthContext>
    </NavigationContainer>

  );
}