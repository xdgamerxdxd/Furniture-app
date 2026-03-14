import React from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { products } from "../Data/products";
import FavoriteItem from "../components/FavouriteItem/FavouriteItem";
import Header from "../components/Header/Header";
import { useRouter } from "expo-router";

const Favorites = () => {

    const router = useRouter();

    const renderItem = ({ item }: any) => {
        const onProductPress = () => {
            router.push({
                pathname: '/ProductDetails/ProductDetails', 
                params: {product: JSON.stringify(item)}
            });
        }
        return (
            <FavoriteItem onPress={onProductPress}
                {...item}
            />
        );
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites"/>
                <FlatList data={products} renderItem={renderItem} 
                    keyExtractor={(item) => String(item.id)}
                />
            </View>
        </SafeAreaView>
    );
};

export default Favorites;
