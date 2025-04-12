import React, { forwardRef, LegacyRef } from "react";
import { View, Text,TextInput, TextInputProps, TouchableOpacity } from "react-native";
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
}

export const Input = forwardRef((Props:Props,ref: LegacyRef<TextInput> | null) => {

    const {IconLeft, IconRight, iconLeftName, iconRightName, title,onIconLeftPress, onIconRightPress, ...rest } = Props

    const calculateSizeWidth = () => {
        if(IconLeft && IconRight) {
            return '80%'
        } else if(IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

    return (
        <>
            <Text style={inputStyle.titleInput}>{title}</Text>
            <View style={inputStyle.boxInput}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity>
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
                        inputStyle.input, {width:calculateSizeWidth()}
                    ]}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity>
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