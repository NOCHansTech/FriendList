import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FriendDetailScreen = ({ route }) => {
  const { friend } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={friend.photo} style={styles.image} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.age}>{friend.age}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FriendList')}
      >
        <Text style={styles.buttonText}>Back to Friend List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
      age: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0000FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FriendDetailScreen;
