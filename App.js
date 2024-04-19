import { View, Text } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './components/StackNavigation';
import DrawerNavigation from './components/DrawerNavigation';
import BottomTabNavigation from './components/BottomTabNavigation';

export default function App() {
  return (
  <NavigationContainer>
    {/* <BottomTabNavigation/> */}
    {/* <StackNavigation/> */} 
    <DrawerNavigation/>
  </NavigationContainer>
  )
}