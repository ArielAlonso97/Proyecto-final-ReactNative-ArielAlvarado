import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.dark,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: myColors.white,
        marginTop: 16,
      },
   
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 200,
        backgroundColor: myColors.green,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.white,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})