import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { useLocalSearchParams, useRouter } from "expo-router";
import Button from "../components/Button/Button";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";


const ProductDetails = () => {
    const { product } = useLocalSearchParams();
    const productParam = Array.isArray(product) ? product[0] : product;
    const productData = productParam ? JSON.parse(productParam) : null;
    const router = useRouter()

    const onPress = () => {
        router.push('/LoggedIn/LoggedIn')
    }

    const onContact = () => {
        let phone = 'real phone number'
        Linking.openURL(`tel:${phone}`)

        let email = 'real email'
        Linking.openURL(`mailto:${email}`)
    }
    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {productData?.images?.length? (
                    <ImageCarousel images={productData?.images} />
                    ) : (
                        <Image style={styles.image} source={{uri: productData?.image}} />
                    )
                }
                <View style={styles.content}>
                    <Text style={styles.title} >{productData?.title}</Text>
                    <Text style={styles.price} >{productData?.price}</Text>
                    <Text style={styles.description} >{productData?.description}</Text>
                </View>
                <Pressable onPress={onPress} hitSlop={20} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../assets/back1.png')}  />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkICon} source={require("../assets/bookmark.png")} style={styles.icon} />
                </Pressable>
                <Button title="Contact Seller" style={styles.button} />
            </View>
        </SafeAreaView>
    )
};

export default ProductDetails;