import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 10,
    },
    main: {
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        color: 'red',
        fontSize: 24,
        fontWeight: '400',
    },
    notification: {
        marginTop: 30,
    },
});

export default styles;