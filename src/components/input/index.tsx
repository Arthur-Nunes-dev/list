import React, { forwardRef, LegacyRef } from "react";
import { View, Text,TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { inputStyle } from "./styles"

type IconComponent =React.ComponentType<React.ComponentProps<typeof
MaterialIcons>> |
React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
    heigth?: number,
    labelStyle?: StyleProp<TextStyle>
}

export const Input = forwardRef((Props:Props,ref: LegacyRef<TextInput> | null) => {

    const {IconLeft, IconRight, iconLeftName, iconRightName, title,onIconLeftPress, onIconRightPress, labelStyle, heigth, ...rest } = Props

    const calculateSizeWidth = () => {
        if(IconLeft && IconRight) {
            return '80%';
        } else if(IconLeft || IconRight) {
            return '90%';
        } else {
            return '100%';
        }
    }

    const calculateSizePaddingLeft = () => {
        if(IconLeft && IconRight) {
            return 0;
        } else if(IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    }

    return (
        <>
            {title && <Text style={[inputStyle.titleInput,labelStyle]}>{title}</Text>}
            <View style={[inputStyle.boxInput,{paddingLeft: calculateSizePaddingLeft(), height:heigth || 40, padding: 1}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={inputStyle.Button}>
                        <IconLeft
                        name={iconLeftName as any}
                        size={20}
                        color={themas.colors.gray}
                        style={inputStyle.Icon}
                        />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        inputStyle.input,
                        {width:calculateSizeWidth(),height:'100%'}
                    ]}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style=     {inputStyle.Button}>
                        <IconRight
                        name={iconRightName as any}
                        size={20}
                        color={themas.colors.gray}
                        style={inputStyle.Icon}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
})