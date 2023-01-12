import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function Movements({data}){
    const [showValue, setShowValue] = useState(false);
    return(
        <TouchableOpacity style={styles.container} onPress={()=>setShowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {
                    showValue ? 
                        (<Text style={data.type===1 ? (styles.expenses) : (styles.value)}>{data.value}</Text>)
                    :
                        (<View style={styles.disable}></View>)
                }
                
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
        marginStart: 14,
        marginEnd: 14,
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 2,
        marginBottom: 8,
    },
    date:{
        color: '#dadada',
        fontWeight: "bold"
    },
    label:{
        fontWeight: "bold",
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: "bold",
    },
    expenses:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: "bold",
    },
    disable:{
        marginTop:6,
        backgroundColor: '#dadada',
        width: 80,
        height: 10,
        borderRadius: 8,
    }


})