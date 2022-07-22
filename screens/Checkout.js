import React from "react";
import { View, Button, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { CheckOutStyle } from "../styles";
import Ionicons from "react-native-vector-icons/Feather";

export const Checkout = ({ navigation }) => {

    const prodScreen = () => navigation.goBack();

    return (
        <View style={CheckOutStyle.container}>
            <View>
                <Text style={CheckOutStyle.emjTxt}>
                    <Text style={CheckOutStyle.emj}>
                        👍
                    </Text>
                    {'\n\n'}
                    Congratulations, Your order has been placed. !
                </Text>
            </View>

            <View style={[CheckOutStyle.prodCard, CheckOutStyle.elevation]}>

                <ImageBackground source={{ uri: "https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/32560207/1611080817510.jpg" }}

                    style={CheckOutStyle.prodImg} />

                <Text>
                    {'\n'}
                    Product Name : Poco f4
                    {'\n'}
                    {'\n'}
                    Desc : Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors...
                    {'\n'}
                    {'\n'}
                    Quantity : 2
                    {'\n'}
                    {'\n'}
                    Price : 1200/-
                </Text>

            </View>

            <TouchableOpacity style={CheckOutStyle.doneBtn} onPress={prodScreen}>
                <Text style={CheckOutStyle.txt}>
                    Done
                    <Ionicons name="check" size={25} color="#fff" />
                </Text>
            </TouchableOpacity>
        </View>
    )
} 