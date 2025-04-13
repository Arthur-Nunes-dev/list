import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const listStyles = StyleSheet.create ({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height/6,
    backgroundColor: themas.colors.primary,
  },
})