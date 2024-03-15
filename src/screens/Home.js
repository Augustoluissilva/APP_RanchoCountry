import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Bem-vindo ao Rancho Country</Text>
            <Text style={styles.descriptionText}>
           Explore uma variedade de produtos country, incluindo roupas, acessórios e decoração para casa. Nossa loja oferece produtos de alta qualidade, inspirados na cultura e tradições do campo. Encontre o estilo que combina com você.
.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000',
    },
    logo: {
        width: 200,
        height: 150,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff', // Texto branco
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff', // Texto branco
    },
});
