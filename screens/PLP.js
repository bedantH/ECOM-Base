import React from "react";
import {
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { productList } from "../styles/screens/productList";


const dummyData = [
    {
        id: 1,
        title: "Product name",
        rating: 1.3,
        description: "Product description",
        price: "Price",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/32560207/2080486031.jpg"
    },
    {
        id: 2,
        title: "Product name",
        rating: 1.3,
        description: "Product description",
        price: "Price",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/32560207/1853058347.jpg"
    },
    {
        id: 3,
        title: "Product name",
        rating: 1.3,
        description: "Product description",
        price: "Price",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/32560207/1693727048.jpg"
    },
    {
        id: 4,
        title: "Product name",
        rating: 1.3,
        description: "Product description",
        price: "Price",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/32560207/1705580467.jpg"
    },
]


const ListItem = ({ id, title, description, price, image, rating }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: "white",
            marginVertical: 10,
            padding: 10,
            borderRadius: 10,
            ...productList.horizontalAlign,
            alignItems: "flex-start",
        }} >
            <Image
                source={{ uri: image }}
                style={{
                    width: 100,
                    height: 150,
                    borderRadius: 10
                }}
            />
            <View style={{
                marginLeft: 10,
                display: "flex",
                flexDirection: "column",
                fontSize: 18,
                justifyContent: "space-between",
            }}>
                <Text style={{ fontSize: 14 }}>
                    {rating}
                </Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>
                    {title}
                </Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>
                    {description}
                </Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>
                    {price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


export const PLP = ({ navigation }) => {

    return (
        <SafeAreaView style={productList.container}>

            <ScrollView>

                <ImageBackground
                    source={{ uri: "https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/32560207/1611080817510.jpg" }}
                    style={productList.searchArea}
                    imageStyle={{
                        borderRadius: 10,
                        opacity: 0.8
                    }}
                >
                    <Text>Earthen Fresh</Text>
                    <View
                        style={productList.inputView}>
                        <TextInput
                            style={productList.input}
                            placeholder="Search for daal, spices, sweets, etc. "
                            clearButtonMode="always"
                            inlineImageLeft="search_icon"
                        />
                        <TouchableOpacity>
                            <Ionicons
                                name="ios-search"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>


                <View style={{ marginTop: 20 }}>
                    <View
                        style={{
                            ...productList.horizontalAlign,
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Products
                        </Text>
                        <Ionicons
                            name="ios-apps"
                            size={24}
                        />
                    </View>
                    <FlatList
                        data={dummyData}
                        renderItem={({ item }) => {
                            return <ListItem {...item} />
                        }}
                        contentContainerStyle={{
                            flexGrow: 1
                        }}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
} 