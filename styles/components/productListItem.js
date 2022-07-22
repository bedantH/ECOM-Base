import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const productListItem = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "flex-start",
        margin: 10
    },
    productImage: {
        width: 100,
        height: 150,
        borderRadius: 10
    },
    productDetails: {
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        fontSize: 18,
        justifyContent: "space-between",
        rating: {
            fontSize: 14
        },
        title: {
            fontSize: 18,
            marginTop: 10,
            fontWeight: "bold",
        },
        description: {
            fontSize: 16,
            marginTop: 10,
        },
        price: {
            fontSize: 18,
            marginTop: 10,
            fontWeight: "bold",
        },
    }
})