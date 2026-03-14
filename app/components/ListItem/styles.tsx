import colors from "@/app/utils/colors"
import { Dimensions, StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: colors.white
      },
      content: {

      },
      title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
      },
      subtitle: {
        color: colors.grey,
        fontSize: 12,
        marginTop: 6
      },
      arrow: {
        height: 32,
        width: 32,
      }      
})

export default styles;