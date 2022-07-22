import { StyleSheet } from 'react-native';

export const productDetailsLayout = StyleSheet.create({
    pdpLayout: {
        padding: 30,
        paddingTop: 60,
    },
    bannerProduct: {
        width: 200,
        height: 230
    },
    contentSec:{
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
    },
    productDesc: {
        fontSize: 13,
        marginBottom: 10,
        marginLeft: 10,
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
    },
    prcTxt: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    prcVal: {
        color: 'green'
    },
    buyBtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 30
    },
    buyBtnTxt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
});