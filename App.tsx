// import * as React from 'react';
// import { View, StyleSheet, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// import HeaderComponent from './src/components/headerComponent';
// import FooterComponent from './src/components/footerComponent';
// import Task from './src/components/task';
// import Menu from './src/components/Menu';
// import DetailsScreen from './src/components/Details';
// import LoginScreen from './src/components/login';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <View style={styles.container}>
//           <HeaderComponent />
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({size}) => {
//                 let iconName;
//                 if (route.name === 'Welcome') {
//                   iconName = 'ios-home';
//                 } else if (route.name === 'Login') {
//                   iconName = 'ios-enter';
//                 }
//                 return null;
//               },
//             })}
//             initialRouteName="Login">
//             <Tab.Screen name="Menu" component={Menu} />
//             <Tab.Screen name="Login" component={LoginScreen} />
//           </Tab.Navigator>
//         </View>
//         <View style={styles.footerContainer}>
//           <FooterComponent />
//         </View>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
//   footerContainer: { backgroundColor: '#333333' },
// });


import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Task from './src/components/task';
import Menu from './src/components/Menu';
import DetailsScreen from './src/components/Details';
import LoginScreen from './src/components/login';

// Create stack navigator for the stack screens
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Task" component={Task} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Login" component={LoginScreen} />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
    <Drawer.Screen name="Task" component={Task} />
  </Drawer.Navigator>
);

// Create the main navigator combining the stack, tab, and drawer navigators
const MainNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Stack" component={StackNavigator} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
);

export default AppNavigator;
