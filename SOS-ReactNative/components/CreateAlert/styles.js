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
      description: {
        flex: 0.5,
        justifyContent: 'flex-start',
        textAlignVertical: 'top'
      },
      choose:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 55
      },
      upload: {
        backgroundColor: 'lightgray',
        padding: 3,
        borderWidth: 1,
        borderColor: 'black'
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