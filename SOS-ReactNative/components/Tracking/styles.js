import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 30,
  },
  map: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 2
  }
});

export default styles;