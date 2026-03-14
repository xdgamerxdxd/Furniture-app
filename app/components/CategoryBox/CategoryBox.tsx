import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import colors from "@/app/utils/colors";

type categoryProps = {
  title: string;
  image: string;
  onPress: () => void;
  isSelected: boolean;
};

const CategoryBox = ({ title, image, onPress, isSelected }: categoryProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: colors.black} : {}]}>
                <Image style={styles.image} source={{ uri: image }}/>
            </View>
            <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'} : {}]}>{title}</Text>
        </Pressable>
    )
};

export default CategoryBox;