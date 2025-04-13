import { StyleSheet } from "react-native";
import { themas } from "../../global/themes"; 

export const flagStyle = StyleSheet.create({
   container: {
      width: 70,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: themas.colors.red,
      borderRadius: 4,
   },
})