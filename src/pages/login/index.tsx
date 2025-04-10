import React from "react";

import {
     View,
     Text,
     Image,
     TextInput,
     TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo.png";

import { MaterialIcons } from "@expo/vector-icons"
import { themas } from "../../global/themes";


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
                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                

                <Text style={styles.titleInput}>SENHA</Text>
                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                    />
                    <MaterialIcons
                        name="password"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>

            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.titleButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}