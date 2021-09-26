import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/components/Feed';
import CreatePost from './src/components/CreatePost/CreatePost';
import Post from './src/components/Post/Post';


const Stack = createNativeStackNavigator();
//  
        //  <Stack.Screen name="Post" component={}/>
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Feed" 
          component={Feed}
        />
        <Stack.Screen name="CreatePost" component={CreatePost}/>
        <Stack.Screen name="Post" component={Post}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
