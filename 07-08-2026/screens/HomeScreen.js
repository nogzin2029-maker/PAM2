import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const baseUrl =
  'https://raw.githubusercontent.com/GabryelTenorio/PW3/main/3bi-2026/31-07-2026';

const imagens = [
  'images (1).jpg',
  'images (2).jpg',
  'images (3).jpg',
  'images (4).jpg',
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.h1}>Olá, Usuário!</Text>

        <Text style={styles.h2}>Músicas em Alta</Text>

        {imagens.map((nome) => (
          <Image
            key={nome}
            source={{
              uri: `${baseUrl}/${encodeURIComponent(nome)}`,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        ))}

        <Text style={styles.h2}>Suas Playlists</Text>

        <Button
          title="Ver minhas playlists"
          onPress={() => navigation.navigate('Playlist')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    padding: 12,
  },

  h1: {
    fontSize: 32,
    fontWeight: '700',
    marginVertical: 10,
  },

  h2: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 15,
  },

  image: {
    width: '100%',
    height: 180,
    marginBottom: 5,
  },
});