import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingTop: 50,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
      },
      input: {
        backgroundColor: 'white',
        marginTop: 50,
        borderWidth: 1,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: 250,
        borderColor: 'gray',
      },
});

export default styles;