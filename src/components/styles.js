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
        borderColor: '#000000',
        borderWidth: 2,
        alignSelf: 'stretch'
      }
 })
 export {styles};