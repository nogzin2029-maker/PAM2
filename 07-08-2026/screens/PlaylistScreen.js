import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function PlaylistScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Minhas Playlists</Text>

        <Text style={styles.playlist}>🎵 Músicas Favoritas</Text>
        <Text style={styles.playlist}>🔥 Hits do Momento</Text>
        <Text style={styles.playlist}>🌙 Para Relaxar</Text>

        <Button
          title="Voltar para Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 25,
  },

  playlist: {
    fontSize: 20,
    paddingVertical: 15,
  },
});