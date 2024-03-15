import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function Info2({navigation}) {
    return  (
        <View style={styles.container}>
            <Text>Página Info2</Text>
            <Pressable style={styles.botao}onPress={() => navigation.goBack()}>
            <Text style={styles.textBotao}>Voltar para o Blog</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Info1")} style={styles.botao}>
                <text style={styles.textBotao}>Abra a tela Info 1</text>

            </Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
    },
    textBotao: {
        color: 'white',
        fontSize: 20,
    },
});