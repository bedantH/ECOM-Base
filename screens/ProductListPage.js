import React, { useEffect, useState } from "react";
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
    Pressable,
    VirtualizedList,
    KeyboardAvoidingView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { listAllProducts } from "../services";
import { ProductListItem } from "../components";
import { commonStyle, productList } from "../styles";


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


export const ProductListPage = ({ navigation }) => {

    const [productListData, setProductListData] = useState([])
    const [listLoading, setListLoading] = useState(true)

    useEffect(() => {
        listAllProducts()
            .then(res => {
                // console.log(res.data)
                setProductListData(res.data)
                setListLoading(false)
            }).catch(err => {
                console.log(err.message)
            })

    }, [])

    if (listLoading) {
        return <Text>Loading...</Text>
    }


    return (
        <SafeAreaView style={productList.container}>



            <ImageBackground
                source={{ uri: "https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/32560207/1611080817510.jpg" }}
                style={productList.searchArea}
                imageStyle={productList.bannerImage}
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


            <View
                style={{
                    ...commonStyle.horizontalAlignCenter,
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: 20,
                }}
            >
                <Text style={productList.boldTitleFont}>
                    Products
                </Text>
                <Ionicons
                    name="ios-apps"
                    size={24}
                />
            </View>


            <FlatList
                data={productListData}
                renderItem={({ item }) => {
                    return <ProductListItem {...item} navigation={navigation} />
                }}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 20
                }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>
    )
} 