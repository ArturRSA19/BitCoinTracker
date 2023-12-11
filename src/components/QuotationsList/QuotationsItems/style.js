import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: '90%',
        height: 'auto',
        backgroundColor: '#403E3F',
        marginBottom: 500,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
    },
    contextLeft: {
        width: '36%',
        alignItems: 'flex-start',
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBitCoin: {
        width: 45,
        height: 45,
        marginLeft: 2,
    },
    dayCotation:{
        fontSize: 15,
        paddingLeft: 5,
        color: '#fff',
        fontWeight: 'bold',
    },
    contextRight: {
        width: '60%',
        alignItems: 'flex-end',
    },
    price: {
        color: '#fff',
        fontSize: 17.5,
        fontWeight: 'bold',
    },
})

export default styles;