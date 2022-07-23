import React from "react";
import { View, Button, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { CheckOutStyle } from "../styles";
import Ionicons from "react-native-vector-icons/Feather";

export const Checkout = ({ route, navigation }) => {

    const { title, image, description, quantity, price } = route.params

    const prodScreen = () => navigation.goBack();

    return (
        <View style={CheckOutStyle.container}>
            <View>
                <Text style={CheckOutStyle.emjTxt}>
                    <Text style={CheckOutStyle.emj}>
                        👍
                    </Text>
                    {'\n'}
                    Congratulations, Your order has been placed!
                </Text>
            </View>

            <View style={[CheckOutStyle.prodCard, CheckOutStyle.elevation]}>

                <ImageBackground
                    source={{ uri: image }}
                    style={CheckOutStyle.prodImg}
                    resizeMode="center"
                />
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}>
                    {'\n'}{title} x {quantity}
                </Text>

                <Text
                    style={{ fontFamily: "PoppinsRegular", fontSize: 12 }}
                >
                    {'\n'}{description.split(" ").slice(0, 20).join(" ")}...

                </Text>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}>
                    {'\n'}
                    Paid: ${price}
                </Text>

            </View>

            <TouchableOpacity style={CheckOutStyle.doneBtn} onPress={prodScreen}>
                <Text style={CheckOutStyle.txt}>
                    Done
                </Text>
                <Ionicons name="check" size={22} color="#fff" />
            </TouchableOpacity>
        </View>
    )
} 