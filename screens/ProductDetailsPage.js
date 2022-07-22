import React from "react";
import { SafeAreaView, ScrollView, Image, TouchableHighlight, Text, Pressable, View, TouchableOpacity } from "react-native";
import { QuantityStepper, Ratings } from "../components";
import { AntDesign } from '@expo/vector-icons';
import { productDetailsLayout as styles } from "../styles";
import Constants from "expo-constants";

export function ProductDetailsPage({ navigation }) {


    const buyProd = () => navigation.navigate('Checkout');

    return (
        <SafeAreaView style={[{ marginTop: Constants.statusBarHeight }]}>
            <ScrollView style={[styles.pdpLayoutScroll, styles.pdpLayout]}>
                <TouchableHighlight style={styles.bannerContainer}>
                    <Image style={styles.bannerProduct}
                        source={{
                            uri: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                        }}
                    />
                </TouchableHighlight>
                <View style={styles.contentSec}>
                    <Ratings rating="4.5" />
                    <Text style={styles.productTitle}>
                        Mens Cotton Jacket
                    </Text>
                    <Text style={styles.productDesc}>
                        Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors...
                    </Text>
                    <QuantityStepper />
                </View>
            </ScrollView>

            <View style={styles.priceSec}>
                <Text style={styles.prcTxt}>
                    Price
                    {'\n'}
                    <Text style={styles.prcVal}>1200/-</Text>
                </Text>

                <TouchableOpacity style={styles.buyBtn} onPress={buyProd}>
                    <Text style={styles.buyBtnTxt}>Buy</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
