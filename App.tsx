import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
import HeaderComponent from './src/components/headerComponent';
import FooterComponent from './src/components/footerComponent';
import Task from './src/components/task';
import Menu from './src/components/Menu';
import DetailsScreen from './src/components/Details';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Task" component={Task}/>
        <Stack.Screen name = "Menu" component={Menu}/>
        <Stack.Screen name = "DetailsScreen" component={DetailsScreen}/>

      </Stack.Navigator>

    {/* <View style={styles.container}>
      <HeaderComponent />
      <Task/>
      <FooterComponent />
    </View> */}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});