import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { jsonPlaceholder, myJsonServer } from '../services/api';

export default function PhotosScreen({ route, navigation }) {
  const { albumId, albumTitle } = route.params;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Try myJsonServer first (real images), fallback to jsonPlaceholder
    myJsonServer.get(`/photos?albumId=${albumId}`).then(res => {
      if (res.data && res.data.length) setPhotos(res.data);
      else jsonPlaceholder.get(`/albums/${albumId}/photos`).then(r => setPhotos(r.data)).catch(console.warn);
    }).catch(() => {
      jsonPlaceholder.get(`/albums/${albumId}/photos`).then(r => setPhotos(r.data)).catch(console.warn);
    });
  }, [albumId]);

  const numColumns = 3;
  const size = (Dimensions.get('window').width - 40 - (numColumns-1)*8) / numColumns;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{albumTitle}</Text>
      <FlatList
        data={photos}
        numColumns={numColumns}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PhotoDetail', { photo: item })}>
            <Image source={{ uri: item.thumbnailUrl || item.url }} style={{ width: size, height: size, margin: 5 }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { textAlign: 'center', fontSize: 18, marginBottom: 10 }
});
