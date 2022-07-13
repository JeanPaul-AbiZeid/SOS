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
      header: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        alignItems: 'center'
      },
      title: {
        color: 'red',
        fontSize: 24,
        fontWeight: '400',
      }
});

export default styles;