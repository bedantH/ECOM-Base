import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Image, TouchableHighlight, Text, Pressable, View, TouchableOpacity } from "react-native";
import { QuantityStepper, Ratings } from "../components";
import { AntDesign } from '@expo/vector-icons';
import { productDetailsLayout as styles } from "../styles";
import Constants from "expo-constants";
import { getSingleProduct } from "../services";

export function ProductDetailsPage({ route, navigation }) {

    const { productId } = route.params;
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSingleProduct({ id: productId })
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    const buyProd = () => navigation.navigate('Checkout');

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
                    <QuantityStepper />
                </View>
            </ScrollView>

            <View style={styles.priceSec}>
                <Text style={styles.prcTxt}>
                    ${product.price}
                </Text>

                <TouchableOpacity style={styles.buyBtn} onPress={buyProd}>
                    <Text style={styles.buyBtnTxt}>Buy</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
