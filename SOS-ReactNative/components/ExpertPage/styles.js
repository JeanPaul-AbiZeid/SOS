import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 20,
    paddingBottom: 100,
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
    marginTop: 50,
    marginBottom: 10  
  },
  map: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2
  },
  button: {
    backgroundColor: 'red',
    alignSelf: 'stretch',
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
});

export default styles;