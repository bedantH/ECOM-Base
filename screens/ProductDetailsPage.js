import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Image, TouchableHighlight, Text, Pressable, View, TouchableOpacity, Alert } from "react-native";
import { QuantityStepper, Ratings } from "../components";
import { AntDesign } from '@expo/vector-icons';
import { productDetailsLayout as styles } from "../styles";
import Constants from "expo-constants";
import { getSingleProduct, sendWhatsAppMessage, sendSMS } from "../services";
import { useAuth } from "../context/AuthContext";

export function ProductDetailsPage({ route, navigation }) {
    const { user } = useAuth();

    const { productId } = route.params;
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        getSingleProduct({ id: productId })
            .then(res => {
                setProduct(res.data)
                setLoading(false)
                navigation.setOptions({
                    headerTitle: "Back"
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const buyProd = () => {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const fourDaysAfter = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)

        const data = {
            productName: product.title.trim() + " for $" + (product.price * counter),
            deliveryDate: fourDaysAfter.toDateString(),
            to: user.mobileNumber
        }

        console.log(data);

        sendWhatsAppMessage(data)
            .then(res => {
                sendSMS(data)
                    .then(res => {
                        console.log(res.data);
                        navigation.navigate("Checkout", { ...product, quantity: counter, price: (product.price * counter) })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.error(err.message)
            })
    }

    if (loading) {
        return <Text>Loading...</Text>
    }

    return (
        <SafeAreaView
        // style={[{ marginTop: Constants.statusBarHeight }]}
        >
            <ScrollView style={[styles.pdpLayoutScroll, styles.pdpLayout]}>
                <View style={styles.bannerContainer}>
                    <Image
                        style={styles.bannerProduct}
                        source={{
                            uri: product.image
                        }}
                        resizeMode="center"
                    />
                </View>
                <View style={styles.contentSec}>
                    <Ratings rating={product.rating.rate} />
                    <Text style={styles.productTitle}>
                        {product.title}
                    </Text>
                    <Text style={styles.productDesc}>
                        {product.description}
                    </Text>
                    <QuantityStepper counter={counter} setCounter={setCounter} />
                </View>
            </ScrollView>

            <View style={styles.priceSec}>
                <Text style={styles.prcTxt}>
                    ${product.price}
                </Text>

                <TouchableOpacity style={styles.buyBtn} onPress={buyProd}>
                    <Text style={styles.buyBtnTxt}>BUY</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
