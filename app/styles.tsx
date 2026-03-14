import { StyleSheet } from "react-native"; 
import colors from "./utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: '100%'
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        fontSize: 40,
        fontWeight: 700,
        textAlign: 'center'
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline', 
    },
    button: {
        backgroundColor: 'none',
        textAlign: 'center',
        marginTop: 30
    },
    buttonText: {
        color: colors.blue,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button1: {
        width: '100%'
    }
});

export default styles;