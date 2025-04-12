import React, { useState } from "react";
import {
     View,
     Text,
     Image,
     TextInput,
     TouchableOpacity,
     Alert,
     ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons"
import { themas } from "../../global/themes";
import { Input } from "../../components/input";

export default function Login () {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,steLoading] = useState(false);

    async function getLogin() {
        try {
            steLoading(true)

            if (!email || !password) {
                return Alert.alert('Atenção','Informe os campos obrigatórios')
            }

            setTimeout(() => {
                if(email == 'arthurnunesdev@gmail.com' && password == '@arthur32'){
                    Alert.alert('Logado com sucesso!')
                } else {
                    Alert.alert('Usuario não encontrado!')
                }
                steLoading(false)
            },3000)

        } catch (error) {
            console.log(error)
        }
    }

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
                <Input 
                    value={email}
                    title="ENDEREÇO E-MAIL"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                    onChangeText={setEmail}
                />
                <Input 
                    value={password}
                    title="SENHA"
                    IconRight={Octicons}
                    iconRightName="eye-closed"
                    onChangeText={setPassword}
                />
                {/*<View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
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
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <MaterialIcons
                        name="password"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>*/}
            </View>

            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.button} onPress={getLogin}>
                    {loading ?
                        <ActivityIndicator /> 
                    : 
                        <Text style={styles.titleButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>

            <Text style={styles.titleBottom}>
                Não tem conta? 
                <Text style={{color: themas.colors.primary}}> Crie agora!</Text>
            </Text>
        </View>
    )
}