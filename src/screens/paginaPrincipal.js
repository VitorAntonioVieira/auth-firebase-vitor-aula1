import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaginaPrincipal = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={styles.btn}
                onPress={() => { navigation.navigate('ListaJogadores') }}
            >
                <Text style={styles.label}>Lista de jogadores</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: '#222222',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20
    },
    label: {
        fontSize: 20,
        fontWeight: 500,
        color: '#222222'
    }
});

export default PaginaPrincipal;