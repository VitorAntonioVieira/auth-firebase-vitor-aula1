import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../Db';

const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        // const auth = getAuth(app);
        const auth = getAuth(app);
          
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setErrorMessage(''); // Limpa a mensagem de erro ao fazer login com sucesso
                navigation.navigate('PaginaPrincipal');
            })
            .catch((err) => {
                // console.error('Login falhou: ' + err);
                setErrorMessage('Usuário ou senha incorretos'); // Define a mensagem de erro
            });
    };

    return (
        <ImageBackground
            source={require('../assets/images.jpg')}
            style={styles.background}
            resizeMode='cover'
        >
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor='#aaa'
                />
                <TextInput
                    style={styles.txtInput}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor='#aaa'
                    secureTextEntry
                />
                {/* Exibe a mensagem de erro, se houver */}
                {errorMessage ? (
                    <Text style={styles.errorMessage}>
                        {errorMessage}
                    </Text>
                ) : null}
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.btnLabel}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        marginHorizontal: 40,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        color: '#222222',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    txtInput: {
        height: 40,
        marginBottom: 15,
        paddingHorizontal: 10,
        color: '#222222',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc'
    },
    btn: {
        backgroundColor: '#222222',
        borderColor: 'transparent',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'semibold',
        textAlign: 'center',
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default RealizarLogin;
