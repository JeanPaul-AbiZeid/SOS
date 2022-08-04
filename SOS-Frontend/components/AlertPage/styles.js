import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 25
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
        fontSize: 22,
        fontWeight: '500',
        marginLeft: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20
    },
    descContainer: {
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        height: 200,
        marginBottom: 10
    },
    imageContainer: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        width: "auto",
        height: 300,
        marginBottom: 40
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