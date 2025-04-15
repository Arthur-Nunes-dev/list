import React from "react";
import { Text, View  } from "react-native";
import { flagStyle } from "./style";

type Props = {
    caption: string,
    color:string,
    selected?: boolean
}

export function Flag({...rest}:Props){
    return (
        <View 
            style={[
                flagStyle.container,
                {backgroundColor:rest?.color},
                rest?.selected && {borderWidth:2}
            ]}
        >
            <Text style={{color:'#FFF'}}>{rest.caption}</Text>
        </View>
    )
}