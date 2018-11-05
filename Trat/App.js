import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home'
import Login from './Components/Login'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
