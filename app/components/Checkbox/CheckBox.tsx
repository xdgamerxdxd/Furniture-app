import { Image, TouchableOpacity, View } from "react-native"

import { styles } from './styles'
import { useState } from "react";

type checkProps = {
    checked: boolean;
    onCheck: (value: boolean) => void;
}

const CheckBox = ({checked, onCheck}: checkProps) => {
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={() => onCheck(!checked)}>
            { checked ? (
                <View hitSlop={20} style={styles.innerContainer}>
                        <Image source={require('../../assets/Check.png')} />
                </View>
            ): null}
        </TouchableOpacity>
    )
}

export default CheckBox