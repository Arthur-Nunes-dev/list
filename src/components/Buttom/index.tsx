import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text  } from "react-native";
import { buttomStyle } from "./style";

type Props = TouchableHighlightProps & {
    text: string,
    loading?: boolean,
}

export function Buttom({...rest}:Props){
    return (

        <TouchableOpacity 
            style={buttomStyle.buttom}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.loading ?
                <ActivityIndicator />
            :
                <Text style={buttomStyle.titleButton}>{rest.text}</Text>
            }
        </TouchableOpacity>
    )
}