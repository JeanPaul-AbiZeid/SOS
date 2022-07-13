import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 20,
        fontWeight: '200'
    },
    desc: {
        fontSize: 18
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 60
    }
});

export default styles;