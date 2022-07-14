import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingTop: 30,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 30,
    },
    main: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 60
    },
    name: {
        fontSize: 30,
        fontWeight: '400',
        marginLeft: 20,
    },
    title: {
        color: 'gray',
        fontSize: 18,
        marginTop: 20
    },
    info: {
        fontSize: 24,
        fontWeight: '400',
        marginBottom: 10,
    },
    infoContainer: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
    }
    
});

export default styles;