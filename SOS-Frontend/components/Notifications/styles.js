import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#e6e6e6',
        paddingLeft: 30,
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
    },
    divider:{
        height: 2,
        backgroundColor: 'gray',
        marginTop: 15
    },
    conditionTitle: {
        fontSize: 20,
        marginTop: 10
    }
});

export default styles;