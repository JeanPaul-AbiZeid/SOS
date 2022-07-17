import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#e6e6e6',
      paddingHorizontal: 20,
      paddingBottom: 100,
      alignItems: 'center',
    },
    main: {
      flexGrow: 1,
    },
    title: {
      color: 'red',
      fontSize: 60,
      fontWeight: '700',
      marginTop: 100,
    },
    head: {
      color: 'gray',
      fontSize: 30,
      fontWeight: '500',
      marginTop: 60,
      marginBottom: 20,
    },
    input: {
      backgroundColor: 'white',
      marginTop: 5,
      marginBottom: 5,
      borderWidth: 1,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      width: 250,
      borderColor: 'gray',
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
    },
    password: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dropdown: {
      width: 250,
    },
    calendar: {
      alignSelf: 'stretch',
      marginHorizontal: 35,
      marginBottom: 20
    },
    buttonCalendar: {
      backgroundColor: 'red',
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      borderRadius: 4,
      elevation: 3,
      marginVertical: 10
    },
    calendarText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '300',
    }
});

export default styles;