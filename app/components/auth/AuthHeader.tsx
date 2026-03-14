import { Pressable, Image, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { styles } from './styles';

type authProps = {
    title: string;
}

const AuthHeader = ({title}: authProps) => {
        const router = useRouter(); 
    
        const handlePress = () => {
                router.push('/')
        }
    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress} hitSlop={20}>
                <Image style={styles.image} source={require('../../assets/back.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default AuthHeader