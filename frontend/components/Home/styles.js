import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
container: {
    flexGrow: 1,
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 20,
    paddingVertical: 100,
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
    alignSelf: 'stretch',
    marginHorizontal: 20,
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
  image: {
    borderColor: "gray",
    borderWidth: 1,
    width: 120,
    height: 120,
    borderRadius: 20
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