import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: 'Boleto do aluguel',
        value: '1.800,00',
        date: '31/08/2022',
        type: 1,
    },
    {
        id: 2,
        label: 'Steam',
        value: '300,00',
        date: '10/08/2022',
        type: 1,
    },
    {
        id: 3,
        label: 'Pagamento xBrain',
        value: '22.000,00',
        date: '05/08/2022',
        type: 0,
    },
    {
        id: 4,
        label: 'Investimentos Bovespa',
        value: '968,23',
        date: '17/08/2022',
        type: 0,
    },
    {
        id: 5,
        label: 'Pizzas e Lanches',
        value: '1.200,15',
        date: '25/08/2022',
        type: 1,
    }
]

export default function Home(){
    return (
        <View style={styles.container}>
            <Header name="Alex Nunes" />
            
            <Balance balance={'15.429,32'} expenses={'389,23'} />
            <Text style={styles.textUltimaMovimentacoes}>Últimas movimentações</Text>
            <FlatList sytle={styles.list} 
                data={list} 
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Movements data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textUltimaMovimentacoes:{
        marginStart: 14,
        marginEnd: 14,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    },
    textList:{
        marginStart: 14,
        marginEnd: 14,
        fontSize: 16,
    },
  });