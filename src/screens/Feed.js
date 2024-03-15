import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function Feed() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: 'Calça Wrangler', image: require('../assets/calça.png'), price: '300.00', description: 'Descrição da Calça Wrangler.' },
        { id: 2, name: 'Camisa TXC', image: require('../assets/camisaTXC.png'), price: '95.00', description: 'Descrição da Camisa TXC.' },
        { id: 3, name: 'Bota Texana', image: require('../assets/bota.png'), price: '550.99', description: 'Descrição da Bota Texana.' },
        { id: 4, name: 'Chapéu Pralana', image: require('../assets/Chapéu.png'), price: '475.00', description: 'Descrição do Chapéu Pralana.' },
    ];

    const handleProductPress = (product) => {
        setSelectedProduct(product);
    };

    const handleBuyPress = () => {
        
        alert(
            'Confirmar Compra',
            'Deseja efetuar a compra?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Compra cancelada'),
                    style: 'cancel',
                },
                { text: 'Sim', onPress: handleConfirmPurchase },
            ],
            { cancelable: false }
        );
    };

    const handleConfirmPurchase = () => {
        
        Alert('Compra Realizada', 'Sua compra foi concluída com sucesso!');
        console.log('Produto adicionado ao carrinho:', selectedProduct);
    };

    const handleBackPress = () => {
        setSelectedProduct(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Produtos em Destaque</Text>
            {selectedProduct ? null : (
                <View style={styles.productsContainer}>
                    {products.map((product) => (
                        <TouchableOpacity
                            key={product.id}
                            style={styles.productContainer}
                            onPress={() => handleProductPress(product)}
                        >
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productTitle}>{product.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            {selectedProduct && (
                <View style={styles.productDetailsContainer}>
                    <Image source={selectedProduct.image} style={styles.selectedProductImage} />
                    <Text style={styles.productDetailsTitle}>{selectedProduct.name}</Text>
                    <Text style={styles.productDetailsText}>{selectedProduct.description}</Text>
                    <Text style={styles.productDetailsText}>Preço: R$ {selectedProduct.price}</Text>
                    <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
                        <Text style={styles.buyButtonText}>Comprar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                        <Text style={styles.backButtonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#000',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    productContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        width: 150,
        marginHorizontal: 10,
    },
    productImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 16,
        marginTop: 10,
    },
    productDetailsContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    selectedProductImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    productDetailsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productDetailsText: {
        fontSize: 16,
        marginBottom: 10,
    },
    buyButton: {
        backgroundColor: '#FF0000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: '#808080',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
