import { listStyles } from "./styles";
import React, { useContext } from "react";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { AuthContextList } from "../../context/authContext-list";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

type PropCard = {
  item:number,
  title:string,
  description:string,
  flag: 'urgente' | 'opcional'
}

export default function List () {

  const {taskList} = useContext<AuthContextType>(AuthContextList)

  const _renderCard = (item:PropCard) => {
    const color = item.flag == 'opcional'?themas.colors.blueLigth:themas.colors.red

    return (
      <TouchableOpacity style={listStyles.card}>
        <View style={listStyles.rowCard}>
          <View style={listStyles.rowCardLeft}>
            <Ball color='red'/>
            <View>
              <Text style={listStyles.titleCard}>{item.title}</Text>
              <Text style={listStyles.descriptionCard}>{item.description}</Text>
            </View>
          </View>
          <Flag 
            caption={item.flag}
            color={color}
          />
        </View>
      </TouchableOpacity>
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
              
            />
          </View>
        </View>
        <View style={listStyles.boxList}>
        <FlatList
          data={taskList}
          style={{marginTop:40,paddingHorizontal:30}}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {return(_renderCard(item))}}
        />
        </View>
    </View>
      
  )
}