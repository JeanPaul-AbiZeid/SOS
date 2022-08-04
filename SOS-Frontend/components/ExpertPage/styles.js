import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 20,
    paddingBottom: 20,
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
    marginTop: 20,
    marginBottom: 10,
  },
  map: {

    borderColor: 'gray',
    borderWidth: 2,
    height: 300
  },
  button: {
    backgroundColor: 'red',
    alignSelf: 'stretch',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  text:{
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18
  }
});

export default styles;