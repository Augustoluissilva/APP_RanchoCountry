import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre a Nossa Loja</Text>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.description}>
                A nossa loja foi criada em 15/03/2024 com o objetivo de oferecer aos nossos clientes os melhores produtos country com qualidade e preço justo. 
                Com o crescimento do mercado digital, decidimos criar um aplicativo para proporcionar uma experiência de compra ainda mais conveniente e acessível aos nossos clientes, permitindo que eles façam compras diretamente do conforto de suas casas.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Cor de fundo
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff', // Cor do texto
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff', // Cor do texto
    },
});
