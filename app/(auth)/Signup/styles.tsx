import colors from "@/app/utils/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        height: '100%',
        backgroundColor: colors.white
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold: {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 10
    },
    footerText: {
        textAlign: 'center',
        color: colors.blue,
    },
    footerLink: {
        fontWeight: 'bold'
    }
})

export default styles;