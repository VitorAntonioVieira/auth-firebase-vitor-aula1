import React, { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import app from '../../Db';

const ListaJogadores = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const db = getFirestore(app);
  const teamCollectionRef = collection(db, 'real-madrid');

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await getDocs(teamCollectionRef);
        const formattedPlayers = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          nascimento: doc.data().nascimento.toDate().toDateString(),
        }));
        setPlayers(formattedPlayers); 
      } catch (error) {
        console.error('Error fetching players:', error); 
      } finally {
        setLoading(false); 
      }
    };

    getPlayers();
  }, []);

  // Conditionally render content or loading indicator
  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginTop: 30 }}>
      <FlatList
        data={players}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.block}>
            <Text>{item.nome}</Text>
            <Text>{item.camisa}</Text>
            <Text>{item.altura}</Text>
            <Text>{item.nascimento}</Text> 
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    block: {
        alignItems: 'flex-start',
        gap: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 20
    }
});

export default ListaJogadores;