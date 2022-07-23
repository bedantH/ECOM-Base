import { StyleSheet } from "react-native"

export const loginStyle = StyleSheet.create({
    subTitle: {
        fontFamily: "DancingScript",
        color: "white",
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        marginTop: 20
    },
    titleText: {
        fontSize: 64,
        fontFamily: "DancingScript",
        color: "white",
        textAlign: "center",
        paddingHorizontal: 20,
        marginTop: "auto",
    },
    upperBanner: {
        flexDirection: "column",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    inputArea: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 20,
        height: "30%",
        marginTop: "auto",
        flexDirection: "column",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inputLabel: {
        fontFamily: "Poppins-Bold",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 10,
    },
    inputField: {
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        borderColor: "#e4e4e4"
    },
    inputButton: {
        width: "100%",
        marginTop: 30,
        marginBottom: 50,
        backgroundColor: "#76BA99",
        paddingVertical: 14,
        justifyContent: "center",
        borderRadius: 10
    },
    inputButtonText: {
        fontFamily: "Poppins-Bold",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        color: "white",
        fontSize: 16,
    }
})