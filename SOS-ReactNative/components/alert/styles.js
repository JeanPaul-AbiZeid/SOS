import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        marginTop: 20,
    },
    text: {
        marginHorizontal:20,
    },
    name: {
        fontSize: 20,
        fontWeight: '400'
    },
    desc: {
        fontSize: 18,
        fontWeight: '300',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 60
    }
});

export default styles;