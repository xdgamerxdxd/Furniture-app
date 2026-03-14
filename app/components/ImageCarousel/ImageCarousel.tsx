import { FlatList, Image, Dimensions, View } from "react-native"
import styles from "./styles"
import { useState } from "react"

const {width} = Dimensions.get('window')

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel = ({images}: any) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const horizontalOffset= event.nativeEvent.contentOffset.x;
        const index = horizontalOffset / width;
        setActiveIndex(index);
    }

    const renderImage = ({item}: any) => {
        return (
            <Image style={styles.image} source={{uri: item}} />
        )
    }

    return (
        <View>
            <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImage} onMomentumScrollEnd={handleScrollEnd}/>
            <View style={styles.paggination}>
                {images?.map((_, i) => (
                    <View key={i} style={[styles.pagginationLine, i === activeIndex ? styles.activeLine : {}]} />
                ))}
            </View>
        </View>
    )
}

export default ImageCarousel