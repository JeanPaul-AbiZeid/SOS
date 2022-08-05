import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 30,
    },
    main: {
        alignItems: 'center',
        marginTop: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    nameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 20,
        marginBottom: 20
    },
    title: {
        color: 'gray',
        fontSize: 18,
        marginTop: 20
    },
    info: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10,
    },
    info1: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10,
    },
    infoContainer: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
        marginLeft: 20,
        flex: 1
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    box1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    margin: {
        marginLeft: 20,
        flex: 1
    },
    imageContainer:{
        elevation: 5,
        position:'relative',
        borderRadius: 60,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'40%',
        height:'30%',
        paddingBottom:10
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    },
    button: {
        backgroundColor: 'red',
        alignSelf: 'stretch',
        marginHorizontal: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 4,
        elevation: 3,
        marginBottom: 50,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    centereddView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        marginBottom: 50,
        alignSelf: 'stretch',
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    row: {
        flexDirection: 'row',
        marginTop: 5
    },
    cancel: {
        backgroundColor: "lightgray",
        padding: 5,
        marginRight: 10
    },
    save: {
        backgroundColor: "lightgreen",
        padding: 5,
        marginLeft: 10
    },
    iconContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
});

export default styles;