import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
});

export default styles;