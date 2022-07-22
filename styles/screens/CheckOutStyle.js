import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const CheckOutStyle = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    emj: {
        fontSize: 50
    },

    emjTxt: {
        textAlign: "center",
        fontSize: 25
    },

    prodCard: {
        width: "85%",
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginVertical: 50,
    },

    elevation: {
        elevation: 10,
        shadowColor: '#000',
    },

    prodImg: {
        width: "100%",
        height: 175,
    },

    doneBtn: {
        backgroundColor: "#57F53B",
        width: "85%",
        borderRadius: 50,
        padding: 10,
    },

    txt: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    }
})