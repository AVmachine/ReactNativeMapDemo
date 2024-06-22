import React from 'react';
import Map from './components/MapDemo';
import {StyleSheet, View, Text} from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={{flex: 1}}><Map></Map></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  }
})
