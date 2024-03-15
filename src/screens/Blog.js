import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RanchoCountryBlog() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Blog do Rancho Country</Text>
            <Text style={styles.description}>
                Aqui você encontrará as últimas notícias, dicas e atualizações sobre produtos e eventos do Rancho Country. Fique por dentro de promoções exclusivas, lançamentos de novos produtos e eventos especiais organizados pela nossa loja.
            </Text>
            <Text style={styles.subtitle}>Destaques</Text>
            <Text style={styles.highlight}>- Promoção de Inverno: descontos de até 50% em roupas de frio.</Text>
            <Text style={styles.highlight}>- Lançamento da Nova Coleção de Verão: confira as últimas tendências em moda country.</Text>
            <Text style={styles.highlight}>- Evento Beneficente: participe do nosso evento para arrecadar fundos para instituições de caridade locais.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Cor de fundo preta
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff', // Cor do texto branca
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff', // Cor do texto branca
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff', // Cor do texto branca
    },
    highlight: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff', // Cor do texto branca
    },
});
