import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const GoogleLogin = () => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require("../../assets/gmail.png")} />
        </TouchableOpacity>
)}

export default GoogleLogin