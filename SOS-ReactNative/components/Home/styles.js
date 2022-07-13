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
        marginTop: 70,
        marginBottom: 20
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
      image: {
        borderColor: "gray",
        borderWidth: 1,
        width: 120,
        height: 120,
      },
      imageContainer: {
        marginHorizontal: 20,
        alignSelf: 'stretch',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
});

export default styles;