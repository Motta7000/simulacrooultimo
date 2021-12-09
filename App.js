import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import login from './screens/login';
import pickOption from './screens/pickOption';
import albums from './screens/albums';
import comments from './screens/comments';
import posts from './screens/posts';
import commentsDetails from './screens/commentsDetails';
import userDetail from './screens/userDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='login'
          component={login}
        />
        <Stack.Screen
          name='pickOption'
          component={pickOption}
        />
        <Stack.Screen
          name='albums'
          component={albums}
        />
        <Stack.Screen
          name='comments'
          component={comments}
        />
              <Stack.Screen
          name='commentsDetails'
          component={commentsDetails}
        />
        <Stack.Screen
          name='posts'
          component={posts}
        />
                <Stack.Screen
          name='userDetail'
          component={userDetail}
        />


      </Stack.Navigator>
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
