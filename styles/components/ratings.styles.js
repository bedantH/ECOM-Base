import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    ratingWrapper: {
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#000',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10
    },
    outerText: {
        color: '#FFCB0C',
        textAlignVertical: 'center',
        display: 'flex'
    },
    innerText: {
        color: '#000000',
        marginLeft: 20,
    }
});