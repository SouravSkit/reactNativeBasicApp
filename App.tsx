import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
import HeaderComponent from './src/components/headerComponent';
import FooterComponent from './src/components/footerComponent';
import Task from './src/components/task';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <HeaderComponent />
      <Task/>
      <FooterComponent />
    </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});