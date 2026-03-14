import colors from "@/app/utils/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.grey,
    },
    image: {
        width: 32,
        height: 32,
    },
    imageContainer: {
        backgroundColor: colors.lightGray,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    }
})

export default styles;