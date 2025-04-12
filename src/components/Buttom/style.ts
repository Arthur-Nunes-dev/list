import { StyleSheet } from "react-native";
import { themas } from "../../global/themes"; 

export const buttomStyle = StyleSheet.create({
    buttom: {
        width: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        textShadowRadius: 4.65,
        elevation: 7.
    },

    titleButton: {
        fontSize: 16,
        color: "#FFFF",
        fontWeight: "bold",
    },
})