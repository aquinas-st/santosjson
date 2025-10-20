import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { jsonPlaceholder } from '../services/api';

export default function AlbumsScreen({ route, navigation }) {
  const { userId, userName } = route.params;
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    jsonPlaceholder.get(`/users/${userId}/albums`).then(res => setAlbums(res.data)).catch(console.warn);
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userName}</Text>
      <Text style={styles.subtitle}>Álbuns</Text>
      <FlatList
        numColumns={2}
        data={albums}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.album} onPress={() => navigation.navigate('Photos', { albumId: item.id, albumTitle: item.title })}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 20, marginBottom: 10 },
  subtitle: { textAlign: 'center', marginBottom: 10 },
  album: { flex: 1, margin: 5, backgroundColor: '#ddd', padding: 10, borderRadius: 6 }
});
