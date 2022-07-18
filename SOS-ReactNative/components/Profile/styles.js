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
        width: 120,
        height: 120,
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
        marginLeft: 20,
        flex: 1
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    margin: {
        marginLeft: 20,
        flex: 1
    },
    imageContainer:{
        elevation:5,
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
        width:'100%',
        height:'30%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
    
});

export default styles;