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
    marginVertical: 100,
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
    marginHorizontal: 60
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
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    alignSelf: 'stretch',
    marginHorizontal: 60,
    marginTop: 50,
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
  signup: {
    flexDirection: 'row'
  },
  signUpText: {
    color: 'red',
    textDecorationLine: 'underline',
  }
});

export default styles;