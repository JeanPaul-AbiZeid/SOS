import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderColor: 'gray',
        borderBottomWidth: 2,
        paddingBottom: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: '400'
    },
    desc: {
        fontSize: 18,
        fontWeight: '300',
    },
    loc: {
        flexDirection: 'row',
        alignContent: 'center'
    }
});

export default styles;