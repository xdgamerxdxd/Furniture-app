import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";


type favItemProps = {
    title: string;
    image: string;
    price: number;
    onPress: () => void;
}

const FavoriteItem = ({ title, image, price, onPress}: favItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/close.png")} />
        </Pressable>
    )
};

export default FavoriteItem;