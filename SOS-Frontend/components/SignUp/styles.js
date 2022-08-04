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
  title: {
    color: 'red',
    fontSize: 60,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 100
  },
  button: {
    backgroundColor: 'red',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 4,
    elevation: 3,
    paddingVertical: 8,
    alignSelf: 'stretch'
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default styles;