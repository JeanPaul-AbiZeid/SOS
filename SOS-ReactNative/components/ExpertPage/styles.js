import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#e6e6e6',
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    title: {
      color: 'black',
      fontSize: 24,
      fontWeight: '400',
      marginTop: 30,
      marginBottom: 50
    },
    map: {
        flex: 0.5,
        borderColor: 'gray',
        borderWidth: 2
    }
});

export default styles;