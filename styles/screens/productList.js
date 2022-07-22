import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const commonStyle = StyleSheet.create({
    horizontalAlignCenter: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export const productList = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: Constants.statusBarHeight
    },
    searchArea: {
        height: 200,
        padding: 10,
        backgroundColor: "white",
        borderColor: "grey",
        resizeMode: "cover",
        display: "flex",
        flexDirection: "column",
    },
    inputView: {
        height: 55,
        borderWidth: 1,
        padding: 10,
        color: "black",
        borderRadius: 10,
        borderColor: "grey",
        backgroundColor: "white",
        marginTop: 'auto',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        fontSize: 16,
        flex: 1
    },
    bannerImage: {
        borderRadius: 10,
        opacity: 0.8,
    },
    boldTitleFont: {
        fontSize: 20,
        fontWeight: "bold",
    },
})