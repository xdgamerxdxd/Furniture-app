import colors from "@/app/utils/colors";
import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45
    },
    list: {

    },
    paggination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    },
    pagginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 5
    },
    activeLine: {
        backgroundColor: colors.black,
        width: 30
    }
})

export default styles;