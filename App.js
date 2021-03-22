import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import UsersList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UsersList} options={{title: 'Users List'}} />
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Create a New User'}} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'User Detail'}} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App