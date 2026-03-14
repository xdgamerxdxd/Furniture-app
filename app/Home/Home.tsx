import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { categories } from "../Data/categories";

import { styles } from "./styles";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import ProductHomeItem from "../components/ProductHomeItem/ProductHomeItem";
import { products } from "../Data/products";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [keyWord, setKeyWord] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(products);


    const router = useRouter(); 


    useEffect(() => {
        let updatedProducts = products;
    
        if (selectedCategory) {
            updatedProducts = updatedProducts.filter(
                (product) => product?.category === selectedCategory
            );
        }
    
        if (keyWord) {
            updatedProducts = updatedProducts.filter(
                (product) => product?.title?.toLowerCase().includes(keyWord?.toLowerCase())
            );
        }
    
        setSelectedProduct(updatedProducts);
    }, [selectedCategory, keyWord]);

    const renderCategories = ( {item}: any ) => {
        return (
            <CategoryBox onPress={() => setSelectedCategory(item?.id)} isSelected={item.id === selectedCategory} title={item?.title} image={item?.image} />
        )
    };


    type Product = {
        id: number;
        title: string;
        price: string;
        category: number;
        image: string;
    };

    const renderProducts = ({ item }: { item: Product }) => {

        const onProductPress = (product: Product) => {
            router.push({
                pathname: '/ProductDetails/ProductDetails', 
                params: {product: JSON.stringify(product)}
            });
        };
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
        )
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} onSearchKeyword={setKeyWord} keyword={keyWord} title="Find All You Need"/>
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategories} keyExtractor={(item, index) => String(index)}/>
                <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={selectedProduct} renderItem={renderProducts} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 270}} />} />
            </View>
        </SafeAreaView>
    );
};

export default Home;