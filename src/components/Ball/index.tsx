import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text, View  } from "react-native";
import { ballStyle } from "./style";

type Props = {
    color:string
}

export function Ball({...rest}:Props){
    return (
        <View style={[ballStyle.ball,{borderColor:rest.color||'gray'}]}/>
    )
}