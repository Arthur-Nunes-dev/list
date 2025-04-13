import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

import {Ionicons, FontAwesome, Entypo, AntDesign, MaterialIcons} from "@expo/vector-icons";
import { themas } from "../../global/themes";

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default ({ state, navigation }: BottomTabBarProps) => {

    const go = (screenName:string) => {
        navigation.navigate(screenName)
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
                <AntDesign 
                    name="bars"
                    style={{
                        opacity: state.index === 0 ? 1 : 0.3,
                        color: themas.colors.primary,
                        fontSize: 32,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItemButtom}>
                <View style={{ width: '100%', left: 10, top: 4 }}>
                    <Entypo 
                        name="plus"
                        style={{ color: "#FFF" }}
                        size={40}
                    />
                </View>
                <View style={{ flexDirection: 'row-reverse', width: '100%', right: 10, bottom: 10 }}>
                    <MaterialIcons 
                        name="edit"
                        style={{ color: "#FFF" }}
                        size={30}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
                <FontAwesome 
                    name="user"
                    style={{
                        opacity: state.index === 1 ? 1 : 0.3,
                        color: themas.colors.primary,
                        fontSize: 32,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}
