import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    pdpLayout: {
        padding: 30,
        paddingTop: 60, 
    },
    bannerProduct: {
        width: 200,
        height: 230
    },
    backIcon: {
        position: 'absolute',
        top: 30,
        left: 15,
        marginTop: 10,
        marginBottom: 10,
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
    }
});