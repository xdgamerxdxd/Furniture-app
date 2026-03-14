import { Text, View } from "react-native";

import { styles } from "./styles";

type separatorProps = {
    text: string
}

const Separator = ({text}: separatorProps) => {
    return (
        <View style={styles.container} >
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    )
}

export default Separator;