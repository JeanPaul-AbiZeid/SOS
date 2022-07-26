import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#e6e6e6',
        paddingLeft: 30,
    },
    header: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 10,
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
    main1: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',  
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
        width: 80,
        height: 80,
        borderRadius: 60
    }
});

export default styles;