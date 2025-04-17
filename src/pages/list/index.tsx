import { listStyles } from "./styles";
import React, { useContext, useRef } from "react";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { formatDateToBR } from "../../global/function";
import { Swipeable } from "react-native-gesture-handler";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";
import { AuthContextList } from "../../context/authContext-list";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function List () {

  const {taskList,handleDelete,handleEdit,filter} = useContext<AuthContextType>(AuthContextList);
  const swipeableRefs = useRef<(Swipeable | null)[]>([]);

  const renderRightActions = () => {
    return (
      <View style={listStyles.buttonDelet}>
        <AntDesign
          name="delete"
          size={20}
          color={'#FFF'}
        />
      </View>
    )
  };

  const renderLeftActions = () => {
    return (
      <View style={listStyles.buttonEdit}>
        <AntDesign
          name="edit"
          size={20}
          color={'#FFF'}
        />
      </View>
    )
  };

  const handleSwipeOpen = (directions:'right'|'left',item:any,index:any) => {
    if(directions == 'right') {
      handleDelete(item)
    } else {
      handleEdit(item)
    }
    swipeableRefs.current[index]?.close()
  };

  const _renderCard = (item:PropCard, index:any) => {
    const color = item.flag == 'opcional'?themas.colors.blueLigth:themas.colors.red

    return (
      <Swipeable
        ref={(ref) => swipeableRefs.current[index] = ref}
        key={index}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableOpen={(directions) => handleSwipeOpen(directions,item,index)}
      >
        <View style={listStyles.card}>
          <View style={listStyles.rowCard}>
            <View style={listStyles.rowCardLeft}>
              <Ball color={color}/>
              <View>
                <Text style={listStyles.titleCard}>{item.title}</Text>
                <Text style={listStyles.descriptionCard}>{item.description}</Text>
                <Text style={listStyles.descriptionCard}>Até {formatDateToBR(item.timeLimit)}</Text>
              </View>
            </View>
            <Flag 
              caption={item.flag}
              color={color}
            />
          </View>
        </View>
      </Swipeable>
    )
  }

  return (
    <View style={listStyles.container}>
        <View style={listStyles.header}>
          <Text style={listStyles.greeting}>Bom, dia <Text style={{fontWeight:'bold'}}>Arthur N.</Text></Text>
          <View style={listStyles.boxInput}>
            <Input 
              IconLeft={Octicons}
              iconLeftName="search"
              onChangeText={(t) => filter(t)}
            />
          </View>
        </View>
        <View style={listStyles.boxList}>
        <FlatList
          data={taskList}
          style={{marginTop:40,paddingHorizontal:30}}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {return(_renderCard(item, index))}}
        />
        </View>
    </View>
      
  )
}