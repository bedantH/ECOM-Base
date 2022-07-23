import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, ImageBackground, KeyboardAvoidingView, Pressable, Alert } from 'react-native'
import Constants from "expo-constants";
import { loginStyle } from '../styles';
import { useAuth } from '../context/AuthContext';

const Login = ({ navigation }) => {
    const { setUser, setIsValidUser } = useAuth()

    const [userPhoneNumber, setUserPhoneNumber] = useState("")

    const handleInputChange = (e) => {
        setUserPhoneNumber(e)
    }

    const handleOnPress = (e) => {
        if (userPhoneNumber.length == 10) {
            setUser({ mobileNumber: userPhoneNumber })
            setIsValidUser(true)
            navigation.navigate("App", { screen: "Home" })
        } else {
            Alert.alert("Please enter a correct number!")
        }

    }


    return (
        <SafeAreaView
            style={[{ marginTop: Constants.statusBarHeight }]}
        >
            <ImageBackground
                source={{ uri: "https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/32560207/1611080817510.jpg" }}
                style={loginStyle.upperBanner}
                imageStyle={{ opacity: 0.8 }}
            >

                <Text style={loginStyle.titleText}>EarthenFresh</Text>
                <Text style={loginStyle.subTitle}>Your health is 80% nutrition, choose your food wisely!
                </Text>

                <View style={loginStyle.inputArea}>
                    <Text style={loginStyle.inputLabel}>Enter your phone number</Text>

                    <KeyboardAvoidingView>

                        <TextInput
                            placeholder="+91 XXXXX-XXXXX "
                            clearButtonMode="always"
                            inlineImageLeft="search_icon"
                            style={loginStyle.inputField}
                            keyboardType="number-pad"
                            onChangeText={handleInputChange}
                        />
                        <Pressable
                            style={loginStyle.inputButton}
                            onPress={handleOnPress}
                        >
                            <Text style={loginStyle.inputButtonText}>Let's Go</Text>
                        </Pressable>
                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>

        </SafeAreaView>
    )

}


export { Login }