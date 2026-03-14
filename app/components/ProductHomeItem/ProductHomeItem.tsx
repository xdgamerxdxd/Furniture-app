import { Image, Pressable, Text } from "react-native";

import { styles } from "./styles";

type productProps = {
    title: string;
    image: string;
    price: string;
    onPress: () => void;
};

const ProductHomeItem = ({ title, image, price, onPress }: productProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.title} >{price}</Text>
        </Pressable>
    )
};

export default ProductHomeItem;