import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Question from './components/Question';
import home from './components/home';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255,255,255)",
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >

        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="Question" component={Question} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6EC72D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "red",
    height: 70,
    width: 200,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  font: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;
