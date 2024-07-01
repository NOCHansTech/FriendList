import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const friendsData = [
  {
    id: 1,
    name: 'Amanda Zara Kirana',
    photo: require('../assets/1.jpg'),
    email: 'amandazahara@gmail.com',
    description: '08589098098',
  },
  {
    id: 2,
    name: 'Adeline Zivana Rania',
    photo: require('../assets/2.jpg'),
    email: 'adelinezivana@gmail.com',
    description: '085878980976'
  },
  {
    id: 3,
    name: 'Amanda Beatrice Kirana',
    photo: require('../assets/3.jpg'),
    email: 'amandabeatrice@gmail.com',
    description: '08587909878'
  },
  {
    id: 4,
    name: 'Amira Putri Salma',
    photo: require('../assets/4.jpg'),
    email: 'amiraputri@gmail.com',
    description: '0858256780987'
  },
  {
    id: 5,
    name: 'Bella Zahra Amanda',
    photo: require('../assets/5.jpg'),
    email: 'bellazahra@gmail.com',
    description: '085843459845'
  },
];

const FriendListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('FriendDetail', { friend: item })}
    >
      <Image source={item.photo} style={styles.image} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FriendDetail', { friend: item })}
      >
        <Text style={styles.buttonText}>Show Detail</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friendsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    paddingVertical: 20,
  },
  card: {
    width: 300,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0000FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FriendListScreen;
