import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#e6e6e6',
      alignItems: 'center',
    },
    title: {
      color: 'red',
      fontSize: 60,
      fontWeight: '700',
      marginTop: 100,
    },
    head: {
      color: 'red',
      fontSize: 30,
      fontWeight: '500',
      marginTop: 60,
      marginBottom: 20,
    },
    input: {
      backgroundColor: 'white',
      marginTop: 10,
      borderWidth: 1,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      width: 250,
      borderColor: 'gray',
    },
    password: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    pass: {
      flexDirection: 'row',
      width: 270,
      alignItems: 'center',
      marginTop: 5,
    },
    button: {
      backgroundColor: 'red',
      width: 250,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      borderRadius: 4,
      elevation: 3,
      marginBottom: 30,
    },
    btnText: {
      color: 'white',
      fontSize: 30,
      fontWeight: '500',
    }
  });

export default styles;