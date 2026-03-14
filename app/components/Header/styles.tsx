import colors  from "@/app/utils/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.black,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    },
    space: {
        width: 24
    }
})

export default styles;