import { StyleSheet } from "react-native";

export const productList = StyleSheet.create({
    container: {
        padding: 10,
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
        height: 42,
        fontSize: 16,
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
        flex: 1
    },
    horizontalAlign: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})