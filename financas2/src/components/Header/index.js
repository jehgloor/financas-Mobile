import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons';

export default function Header({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
                    <Feather name='user' size={27} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: 30,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    username:{
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff',
    },
    content:{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonUser:{
        width:44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
})