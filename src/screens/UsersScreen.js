import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { jsonPlaceholder } from '../services/api';

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    jsonPlaceholder.get('/users').then(res => setUsers(res.data)).catch(console.warn);
  }, []);

  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>
      <TextInput style={styles.search} placeholder="Buscar..." value={search} onChangeText={setSearch} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Albums', { userId: item.id, userName: item.name })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 22, marginBottom: 20 },
  search: { backgroundColor: '#eee', padding: 8, borderRadius: 5, marginBottom: 10 },
  item: { backgroundColor: '#ddd', padding: 10, marginVertical: 5 }
});
