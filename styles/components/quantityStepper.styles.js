import { StyleSheet, Text, View } from 'react-native';

export const quantityStepper = StyleSheet.create({
    stepperContainer: {
        flexDirection: 'row',
        backgroundColor: "transparent",
        alignSelf: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
    },
    textInput: {
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: 5,
        height: 32,
    },
    stepper: {
        width: 40,
        height: 40,
        textAlign: 'center'
    },
    textCenter: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        backgroundColor: "#76BA99",
        color: '#fff',
        padding: 5,
        fontWeight: 'bold',
    },
    add: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    sub: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    }
});