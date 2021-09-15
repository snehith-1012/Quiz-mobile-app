import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const home = ({ navigation, route }) => {

  var scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Question", {
          questionNumber: 0,
          scores: scores
        })
      }} >
        <Text style={styles.font}>
          Let us begin
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
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

export default home;

