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
        marginLeft: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22
    },
    desc: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginVertical: 10,
    },
    imageContainer: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        width: "auto",
        height: 300
    },
    image: {
        flex: 1
    },
    case: {
        color: 'gray',
        fontSize: 18,
        marginTop: 20
    }
});

export default styles;