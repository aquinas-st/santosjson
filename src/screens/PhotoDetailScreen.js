import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

export default function PhotoDetailScreen({ route }) {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{photo.title}</Text>
      <Image source={{ uri: photo.url || photo.thumbnailUrl }} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { textAlign: 'center', marginBottom: 20, fontSize: 16 },
  image: { width: Dimensions.get('window').width * 0.9, height: Dimensions.get('window').height * 0.6 }
});
