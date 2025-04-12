import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

import {Ionicons, FontAwesome, Entypo, AntDesign, MaterialIcons} from "@expo/vector-icons";

export default ({state,navigation}) => {
    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem}>
                <AntDesign 
                    name="bars"
                    style={{fontSize:32}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItemButtom}>
                <View style={{width:'100%',left:10,top:4}}>
                    <Entypo 
                        name="plus"
                        style={{color: "#FFF"}}
                        size={40}
                    />
                </View>
                <View style={{flexDirection:'row-reverse',width:'100%',right:10,bottom:10}}>
                    <MaterialIcons 
                        name="edit"
                        style={{color: "#FFF"}}
                        size={30}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem}>
                <FontAwesome 
                    name="user"
                    style={{fontSize:32}}
                />
            </TouchableOpacity>
        </View>
    )
}