import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const listStyles = StyleSheet.create ({
  container: {
    flex:1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height/6,
    backgroundColor: themas.colors.primary,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 10,
  },
  boxInput: {
    width: "80%",
  },
  boxList: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: '100%',
    minHeight: 60,
    backgroundColor: '#FFF',
    marginTop: 6,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: themas.colors.lightGray,

  },
  rowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCardLeft: {
    width: '70%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionCard: {
    color: themas.colors.gray
  },
  buttonDelet: {
    backgroundColor: themas.colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonEdit: {
    backgroundColor: themas.colors.blueLigth,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginVertical: 10,
    borderRadius: 10,
  },
})