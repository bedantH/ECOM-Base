import React from "react";
import { SafeAreaView, ScrollView, Image, TouchableHighlight, Text, Pressable, View, TouchableOpacity } from "react-native";
import { QuantityStepper, Ratings } from "../components";
import { AntDesign } from '@expo/vector-icons';
import { productDetailsLayout as styles } from "../styles";
import Constants from "expo-constants";

export function ProductDetailsPage({ navigation }) {


    const buyProd = () => navigation.navigate('Checkout');

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <Pressable>
                <AntDesign style={styles.backIcon} name="left" size={16} color="black" />
            </Pressable>
            <ScrollView style={styles.pdpLayoutScroll}>
                <TouchableHighlight style={styles.bannerContainer}>
                    <Image style={styles.bannerProduct}
                        source={{
                            uri: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                        }}
                    />
                </TouchableHighlight>
                <Ratings rating="4.5" />
                <Text style={styles.productTitle}>
                    Mens Cotton Jacket
                </Text>
                <Text style={styles.productDesc}>
                    Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors...
                </Text>
                <QuantityStepper />
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
