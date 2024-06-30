import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendListScreen from './components/FriendListScreen';
import FriendDetailScreen from './components/FriendDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FriendList">
        <Stack.Screen name="FriendList" component={FriendListScreen} options={{ title: 'Friend List' }} />
        <Stack.Screen name="FriendDetail" component={FriendDetailScreen} options={{ title: 'Friend Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
