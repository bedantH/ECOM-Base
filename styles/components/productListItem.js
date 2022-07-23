import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const productListItem = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: "flex-start",
    },
    productImage: {
        width: 140,
        height: 200,
    },
    productDetails: {
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
        fontSize: 18,
        justifyContent: "space-between",
        width: "50%",
        rating: {
            fontSize: 14,
            flex: 1,
            fontFamily: "PoppinsRegular",
            opacity: 0.5,
        },
        title: {
            flexGrow: 1,
            fontSize: 14,
            marginTop: 10,
            fontWeight: "bold",
            flexWrap: "wrap",
            fontFamily: "Poppins-Bold"
        },
        description: {
            fontFamily: "PoppinsRegular",
            flexGrow: 1,
            flexWrap: "wrap",
            fontSize: 12,
            marginTop: 10,
            opacity: 0.8,
        },
        price: {
            fontFamily: "PoppinsRegular",
            flexGrow: 1,
            fontSize: 22,
            marginTop: 10,
            fontWeight: "bold",
        },
    }
})