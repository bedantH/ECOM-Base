import { StyleSheet } from 'react-native';

export const productDetailsLayout = StyleSheet.create({
    pdpLayout: {
        padding: 10,
        paddingTop: 0,
        backgroundColor: "white"
    },
    bannerProduct: {
        width: 200,
        height: 230
    },
    contentSec: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 80,
    },
    bannerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 40,
        alignSelf: 'center',
        borderRadius: 20,
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 10,
        fontFamily: "PoppinsRegular",

    },
    productDesc: {
        fontSize: 13,
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: "PoppinsRegular",
    },
    pdpLayoutScroll: {
        width: '100%',
        height: '100%',
    },
    priceSec: {
        backgroundColor: '#fff',
        position: 'absolute',
        width: '100%',
        height: 70,
        bottom: 0,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderTopStartRadius: 10,
        borderTopStartRadius: 10,
    },
    prcTxt: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: "Poppins-Bold",
    },
    buyBtn: {
        backgroundColor: '#76BA99',
        padding: 10,
        elevation: 1,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buyBtnTxt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: "Poppins-Bold",
    }
});