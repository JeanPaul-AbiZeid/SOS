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
  inputContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 30
  },
  input: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'gray',
  },
  button: {
    backgroundColor: 'red',
    alignSelf: 'stretch',
    marginHorizontal: 30,
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
    alignSelf: 'stretch',
    marginHorizontal: 30,
  }
});

export default styles;