import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text, View  } from "react-native";
import { flagStyle } from "./style";

type Props = {
    caption: string,
    color:string
}

export function Flag({...rest}:Props){
    return (
        <TouchableOpacity style={[flagStyle.container,{backgroundColor:rest?.color}]}>
            <Text style={{color:'#FFF'}}>{rest.caption}</Text>
        </TouchableOpacity>
    )
}