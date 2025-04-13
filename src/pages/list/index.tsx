import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Input } from "../../components/input";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { listStyles } from "./styles";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

type PropCard = {
  item:number,
  title:string,
  description:string,
  flag: 'urgente' | 'opcional'
}

const data:Array<PropCard> = [
  {
    item: 0,
    title: 'Realizar a lição de casa!',
    description: 'página 10 a 20',
    flag: 'urgente',
  },
  {
    item: 1,
    title: 'Passear com cachorro!',
    description: 'página 10 a 20',
    flag: 'urgente',
  },
  {
    item: 2,
    title: 'Sair pra tomar açai!',
    description: 'página 10 a 20',
    flag: 'urgente',
  },
]

export default function List () {

  const _renderCard = (item:PropCard) => {
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
          <Flag caption="urgente" color={themas.colors.red}/>
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
          data={data}
          style={{marginTop:40,paddingHorizontal:30}}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {return(_renderCard(item))}}
        />
        </View>
    </View>
      
  )
}