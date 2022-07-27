import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#e6e6e6',
  },label:{
    alignSelf: 'stretch',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
    marginHorizontal: 50,
    borderColor: 'gray',
  },
  description: {
    flex: 0.8,
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
    alignSelf: 'stretch',
    marginHorizontal: 50,
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