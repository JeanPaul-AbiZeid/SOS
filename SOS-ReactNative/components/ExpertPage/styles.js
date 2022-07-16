import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#e6e6e6',
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    info: {
        marginVertical: 20
    },
    title: {
      color: 'black',
      fontSize: 24,
      fontWeight: '400',
      marginTop: 30,
    },
    loc:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    direction: {
      fontSize: 20,
      marginTop: 50,
      marginBottom: 10  
    },
    map: {
        flex: 0.6,
        borderColor: 'gray',
        borderWidth: 2
    }
});

export default styles;