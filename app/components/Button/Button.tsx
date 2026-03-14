import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";

type buttonProps = {
    title: string,
    style?: object,
    textStyle?: any,
    redirect: any
}

const Button = ({title, style, textStyle, redirect}: buttonProps) => {
    const router = useRouter(); 

    const handlePress = () => {
        if (redirect) {
            router.push(redirect)
        }
    }
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress} style={[styles.container, style]}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button