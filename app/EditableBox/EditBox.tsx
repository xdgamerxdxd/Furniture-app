import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"

const EditBox = ({label, value, onChangeText, editable}: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
        </View>
    )
};

export default EditBox