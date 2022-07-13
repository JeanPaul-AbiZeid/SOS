import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingTop: 50,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
      }
});

export default styles;