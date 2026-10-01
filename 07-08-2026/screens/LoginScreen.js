import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function entrar() {
    if (email.trim() && password.trim()) {
      navigation.navigate('Home');
    }
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.center}>
        <Text style={styles.logo}>MUSICA</Text>

        <Text style={styles.h1}>Login</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
        />

        <Button title="Entrar" onPress={entrar} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  h1: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#777777',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 8,
  },
});