import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity ,Alert,ActivityIndicator } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Buttom } from "../../components/Buttom";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login () {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail] = useState('Admin');
    const [password,setPassword] = useState('Admin');
    const [showPassword, setShowPassword] = useState(true);
    const [loading,steLoading] = useState(false);

    async function getLogin() {
        try {
            steLoading(true)

            if (!email || !password) {
                return Alert.alert('Atenção','Informe os campos obrigatórios')
            }

            setTimeout(() => {
                if(email == 'Admin' && password == 'Admin'){
                    navigation.reset({routes:[{name:"BottomRoutes"}]})
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
                    iconRightName={showPassword?"eye-closed":"eye"}
                    onChangeText={setPassword}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={styles.boxBottom}>
                <Buttom
                    text="Entar"
                    onPress={() => getLogin()}
                    loading={loading}
                />
            </View>

            <Text style={styles.titleBottom}>
                Não tem conta? 
                <Text style={{color: themas.colors.primary}}> Crie agora!</Text>
            </Text>
        </View>
    )
}