import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { userStyles } from "./styles";
import { Ionicons } from "@expo/vector-icons"
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function User () {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogout = () => {
        Alert.alert("Logout", "Você saiu da conta.")
        return navigation.reset({routes:[{name:"Login"}]})
    };
    return (
        <View style={userStyles.container}>
            <Text style={userStyles.name}>Arthur N.</Text>
            <TouchableOpacity style={userStyles.logoutButton} onPress={handleLogout}>
                <Ionicons
                 name="exit"
                 style={{color:'gray'}}
                 size={40}
                />
            </TouchableOpacity>
        </View>
    )
}