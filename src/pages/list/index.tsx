import React from "react";
import { View, Text } from "react-native";
import { Input } from "../../components/input";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { listStyles } from "./styles";

export default function List () {
    return (
      <View style={listStyles.container}>
          <View style={listStyles.header}>
            <Input 
              title="Bom dia"
              IconLeft={Octicons}
              iconLeftName="search"
            />
          </View>
      </View>
        
    )
}