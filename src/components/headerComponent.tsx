import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderComponent() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
	  Welcome to
        <Text style={headerStyles.innerText}> Wholewave Elements Pvt Ltd</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});