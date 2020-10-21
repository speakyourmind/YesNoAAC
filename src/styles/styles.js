import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    paddedTitle: {
        paddingLeft: 40
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    },
    input: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    pickerView: {
        width: 300,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#2c3e50',
        borderWidth: 2,
        alignSelf: 'stretch'
    },
    bordered: {
        borderColor: '#2c3e50',
        borderWidth: 2
    },
    listItem:{
        borderColor: '#2c3e50',
        borderBottomWidth: 1,
    },
    separator: {
        marginTop: 10
    },
    editHeader:{
        backgroundColor: '#277CB4' 
    },
    backgroundDark:{ 
        backgroundColor: '#2c3e50' 
    },
    container: {
        flex: 1,
      },
})
export { styles };