import React from "react";

import {
     View,
     Text,
     Image,
     TextInput,
} from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo.png"


export default function Login () {
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image
                    source={Logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Bem vindo de volta!</Text>
            </View>

            <View style={styles.boxMid}>
                <Text style={styles.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View>
                    <TextInput />
                </View>
                

                <Text style={styles.titleInput}>SENHA</Text>
                <View>
                   <TextInput /> 
                </View>
            </View>

            <View style={styles.boxBottom}>
            </View>
        </View>
    )
}