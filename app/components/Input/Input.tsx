import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions, StyleProp, TextStyle, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from './styles'
import { useState } from "react";

type inputProps = {
    label?: string;
    placeHolder: string;
    isPassword?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    multiline?: boolean;
    style?: StyleProp<TextStyle>;
    type?: 'picker'
    options?: string[];
}

const Input = ({label, placeHolder, isPassword, options, value, onChangeText, keyboardType, multiline, style, type}: inputProps) => {
    const [isPasswordVisable, setIsPasswrodVisable] = useState(false)
    const [isPickerOpen, setIsPickerOpen] = useState(false)
    const onEyePress = () => {
        setIsPasswrodVisable(!isPasswordVisable)
    }

    const onPickerPress = () => {
      setIsPickerOpen(!isPickerOpen)
    }

    const onOptionPress = (option: string) => {
      setIsPickerOpen(false)
      onChangeText?.(option)
    }

    return (
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        {type === 'picker' ? (
          <TouchableOpacity style={styles.inputContainer} onPress={onPickerPress}>
            <Text style={[styles.input, style]}>{value || placeHolder}</Text>
            <Ionicons name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={styles.inputContainer}>
          <TextInput secureTextEntry={isPassword && !isPasswordVisable} placeholder={placeHolder} style={[styles.input, style]} value={value} onChangeText={onChangeText} keyboardType={keyboardType} multiline={multiline} />
              {
                  isPassword ? (
                  <TouchableOpacity onPress={onEyePress}>
                      <Image style={styles.eye} source={isPasswordVisable ? require("../../assets/eye_closed.png") : require("../../assets/eye.png")} />
                  </TouchableOpacity>
                  ) : null
              }
          </View>
        )}
        <Modal visible={isPickerOpen} transparent>
          <TouchableOpacity activeOpacity={1} onPress={onPickerPress} style={styles.modalWrapper}>
            <View style={styles.modalContent}>
              <Text>Select option</Text>
              {options?.map((option) => (
                <TouchableOpacity key={option} onPress={() => onOptionPress(option)}>
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    )
}

export default Input;