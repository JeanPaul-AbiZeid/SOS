import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    main: {
        flexGrow: 1,
    },
    notification: {
        marginTop: 30,
    },
    name: {
        fontSize: 20,
        fontWeight: '400'
    },
    desc: {
        fontSize: 18,
        fontWeight: '300',
    },
    loc: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    main1: {
        marginVertical: 10,
        borderColor: 'gray',
    },
    divider:{
        height: 2,
        backgroundColor: 'gray',
        marginTop: 15
    }
});

export default styles;